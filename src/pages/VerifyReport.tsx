import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navigation from '@/components/Navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Search, Shield, FileCheck, Download, AlertCircle } from 'lucide-react';

const VerifyReport = () => {
  const [reportNumber, setReportNumber] = useState('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setVerified(false);
    setPdfUrl(null);

    if (!reportNumber.trim()) {
      setError('Please enter a report number');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        'https://jpdiamondlab.pythonanywhere.com/get_pdf',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ SummaryNo: reportNumber }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch report');
      }

      const blob = await response.blob();
      const pdfBlobUrl = URL.createObjectURL(blob);

      // Open in new tab
      window.open(pdfBlobUrl, '_blank');

      // Store for iframe + download
      setPdfUrl(pdfBlobUrl);
      setVerified(true);
    } catch (err) {
      console.error(err);
      setError('No report found for this number. Please check and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Verify Report | JP Diamond Lab</title>
        <meta
          name="description"
          content="Verify and view your diamond certification report online."
        />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold mb-6 text-gradient-gold">
            Verify Report
          </h1>
          <p className="text-xl text-muted-foreground">
            Instantly verify your diamond certification report
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="card-gold p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="reportNumber">Report Number</Label>
                <div className="relative mt-2">
                  <Input
                    id="reportNumber"
                    value={reportNumber}
                    onChange={(e) => setReportNumber(e.target.value)}
                    className="pl-12 h-12"
                    placeholder="e.g., DLP-2024-001234"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
                </div>

                {error && (
                  <div className="flex items-center mt-2 text-destructive">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </div>

              <Button type="submit" className="btn-gold w-full" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify Report'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* PDF Display */}
      {verified && pdfUrl && (
        <section className="section-padding bg-accent/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Verified Certificate</h2>

            <iframe
              src={pdfUrl}
              className="w-full h-[700px] border rounded-lg"
              title="Verified Report"
            />

            <div className="mt-4">
              <a href={pdfUrl} download={`${reportNumber}.pdf`}>
                <Button className="btn-gold">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VerifyReport;
