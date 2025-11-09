import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Shield, FileCheck, Download, AlertCircle } from 'lucide-react';

const VerifyReport = () => {
  const [reportNumber, setReportNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

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
    const response = await fetch('https://jpdiamondlab.pythonanywhere.com/get_pdf', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ SummaryNo: reportNumber }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch report');
    }

    const blob = await response.blob();
    const pdfBlobUrl = URL.createObjectURL(blob);

    // ✅ Open PDF in a new tab
    window.open(pdfBlobUrl, '_blank');

    setVerified(true);
  } catch (err: any) {
    console.error(err);
    setError('No report found for this number. Please check and try again.');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Verify Report | JP Diamond Lab | Diamond Certification Services Chennai</title>
        <meta name="description" content="JP Diamond Lab for professional diamond testing and certification services in Chennai. Verify and view your report online, always." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-gradient-gold">
            Verify Report
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instantly verify the authenticity of your diamond certification report
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="card-gold p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-center">
              Enter Report Number
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="reportNumber" className="text-base font-medium">
                  Report Number
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="reportNumber"
                    type="text"
                    placeholder="e.g., DLP-2024-001234"
                    value={reportNumber}
                    onChange={(e) => setReportNumber(e.target.value)}
                    className="pl-12 h-12 text-lg"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
                {error && (
                  <div className="flex items-center mt-2 text-destructive">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="btn-gold w-full h-12 text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <FileCheck className="w-5 h-5 mr-2" />
                    Verify Report
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/50">
              <h3 className="font-semibold mb-4">How Verification Works</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                  <span>Enter your report number in the field above</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                  <span>Our system searches the secure JP Diamond Lab database</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                  <span>View and download your verified certificate instantly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Display */}
      {verified && pdfUrl && (
        <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <FileCheck className="w-5 h-5 mr-2" />
              Report Verified Successfully
            </div>
            <h2 className="font-display text-3xl font-bold mb-8 text-gradient-gold">
              Verified Certificate
            </h2>

            <div className="bg-white shadow-[var(--shadow-elegant)] rounded-xl p-4">
              <iframe
                src={pdfUrl}
                title="Verified Diamond Report"
                className="w-full h-[700px] rounded-lg border border-border"
              />
              <div className="mt-4 flex justify-center">
                <a href={pdfUrl} download={`${reportNumber}.pdf`}>
                  <Button className="btn-gold">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center text-gradient-gold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-gold p-6">
              <h3 className="font-semibold text-lg mb-2">What if I can't find my report?</h3>
              <p className="text-muted-foreground">
                If your report number is not found, please double-check the number for accuracy.
                If the issue persists, contact our customer service team for assistance.
              </p>
            </div>

            <div className="card-gold p-6">
              <h3 className="font-semibold text-lg mb-2">How long are reports stored in the system?</h3>
              <p className="text-muted-foreground">
                All reports are permanently stored in our secure database and can be verified
                at any time, even years after issuance.
              </p>
            </div>

            <div className="card-gold p-6">
              <h3 className="font-semibold text-lg mb-2">Can I download a copy of my report?</h3>
              <p className="text-muted-foreground">
                Yes, once verified, you can download a PDF copy of your report for your records
                or for insurance purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyReport;
