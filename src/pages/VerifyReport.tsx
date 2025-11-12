"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, Shield, FileCheck, Download, AlertCircle, Loader } from "lucide-react"

interface CertificateData {
  SummaryNo: string
  Conclusion: {
    CaratWeight: string
    Clarity: string
    Color: string
    CutAndShape: string
  }
  Description: {
    OneSetOf: string
    Stamped: string
    StuddedWith: string
    TotalWeight: string
  }
  ScanReport: any
}

const VerifyReport = () => {
  const [searchParams] = useSearchParams()
  const [reportNumber, setReportNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [error, setError] = useState("")
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null)

  useEffect(() => {
    const summaryNo = searchParams.get("summaryNo")
    if (summaryNo) {
      setReportNumber(summaryNo)
      fetchCertificateDetails(summaryNo)
    }
  }, [searchParams])

  const fetchCertificateDetails = async (summaryNo: string) => {
    setError("")
    setCertificateData(null)

    if (!summaryNo.trim()) {
      setError("Please enter a report number")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("https://jpdiamondlab.pythonanywhere.com/get_details", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ SummaryNo: summaryNo }),
      })

      if (!response.ok) throw new Error("Failed to fetch report")

      const data = await response.json()
      setCertificateData(data)
    } catch (err: any) {
      console.error(err)
      setError("No report found for this number. Please check and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownloadPDF = async () => {
    if (!reportNumber.trim()) {
      setError("Please enter a report number")
      return
    }

    setIsDownloading(true)
    try {
      const response = await fetch("https://jpdiamondlab.pythonanywhere.com/get_pdf", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ SummaryNo: reportNumber }),
      })

      if (!response.ok) throw new Error("Failed to download PDF")

      const blob = await response.blob()
      const pdfBlobUrl = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = pdfBlobUrl
      link.download = `Diamond-Report-${reportNumber}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(pdfBlobUrl)
    } catch (err: any) {
      console.error(err)
      setError("Failed to download PDF. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchCertificateDetails(reportNumber)
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Verify Report | JP Diamond Lab</title>
        <meta name="description" content="Verify and download your diamond certification report online." />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Shield className="w-14 h-14 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gradient-gold">Verify Report</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Instantly verify the authenticity of your diamond certification report.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-0 sm:py-0 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card-gold p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold mb-4 sm:mb-6 text-center">Enter Report Number</h2>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <Label htmlFor="reportNumber" className="text-base font-medium">Report Number</Label>
                <div className="relative mt-2">
                  <Input
                    id="reportNumber"
                    type="text"
                    placeholder="e.g., 12345"
                    value={reportNumber}
                    onChange={(e) => setReportNumber(e.target.value)}
                    className="pl-12 h-12 text-base sm:text-lg"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
                {error && (
                  <div className="flex items-center mt-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                )}
              </div>

              <Button type="submit" className="btn-gold w-full h-12 text-base sm:text-lg" disabled={isLoading}>
                {isLoading ? (
                  <><Loader className="w-5 h-5 mr-2 animate-spin" /> Verifying...</>
                ) : (
                  <><FileCheck className="w-5 h-5 mr-2" /> Verify Report</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      {certificateData && (
        <section className="py-5 sm:py-6 bg-gradient-to-b from-accent/10 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card-gold p-5 sm:p-6">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 w-full justify-center text-sm sm:text-base">
                <FileCheck className="w-5 h-5 mr-2" /> Report Verified Successfully
              </div>

              <div className="bg-white rounded-xl border border-accent/20 shadow-[var(--shadow-elegant)]">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 border-b border-accent/20">
                  <h2 className="font-display text-2xl font-bold text-center mb-1 text-gradient-gold">Diamond Certificate</h2>
                  <p className="text-center text-muted-foreground font-medium">Report Number: {certificateData.SummaryNo}</p>
                </div>

                <div className="p-4 sm:p-6 space-y-6">
                  <div>
                    <h3 className="font-display text-lg font-bold mb-3 text-primary border-b border-accent/30 pb-2">Description</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                      {Object.entries(certificateData.Description).map(([key, value]) => (
                        <div key={key} className="card-gold p-3 text-sm sm:text-base">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="font-semibold text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold mb-3 text-primary border-b border-accent/30 pb-2">Conclusion</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                      {Object.entries(certificateData.Conclusion).map(([key, value]) => (
                        <div key={key} className="card-gold p-3 text-sm sm:text-base">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                          <p className="font-semibold text-foreground">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-4 border-t border-accent/20">
                    <Button onClick={handleDownloadPDF} className="btn-gold w-full h-10 sm:h-12 text-base" disabled={isDownloading}>
                      {isDownloading ? (
                        <><Loader className="w-4 h-4 mr-2 animate-spin" /> Downloading...</>
                      ) : (
                        <><Download className="w-4 h-4 mr-2" /> Download</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How Verification Works */}
      <section className="py-4 sm:py-5 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card-gold p-5 sm:p-8">
            <h3 className="font-semibold text-lg mb-4 text-center">How Verification Works</h3>
            <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
              {["Enter your report number in the field above", "Our system searches the secure JP Diamond Lab database", "View and download your verified certificate instantly"].map((text, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{i + 1}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-6 sm:mb-8 text-center text-gradient-gold">Frequently Asked Questions</h2>
          <div className="space-y-5 sm:space-y-6">
            {[{
              q: "What if I can't find my report?",
              a: "If your report number is not found, please double-check the number for accuracy. If the issue persists, contact our customer service team for assistance.",
            }, {
              q: "How long are reports stored in the system?",
              a: "All reports are permanently stored in our secure database and can be verified at any time, even years after issuance.",
            }, {
              q: "Can I download a copy of my report?",
              a: "Yes, once verified, you can download a PDF copy of your report for your records or for insurance purposes.",
            }].map((item, i) => (
              <div key={i} className="card-gold p-5 sm:p-6">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VerifyReport