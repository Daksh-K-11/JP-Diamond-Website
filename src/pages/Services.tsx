import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Link, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Clock, Shield, Award, CheckCircle } from 'lucide-react';
import diamondCertification from '@/assets/diamond-certification.jpg';
import jewelryCertification from '@/assets/jewelery-certification.jpg';
import diamondSealing from '@/assets/diamond-sealing.jpg';

const Services = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeService, setActiveService] = useState('diamond-certification');

  useEffect(() => {
    if (serviceId) {
      setActiveService(serviceId);
    }
  }, [serviceId]);

  const services = {
    'diamond-certification': {
      title: 'Diamond Certification',
      image: diamondCertification,
      description: 'Comprehensive analysis and grading of diamonds with internationally recognized standards.',
      features: [
        'Complete 4Cs analysis (Cut, Color, Clarity, Carat)',
        'Advanced photomicrography',
        'Fluorescence assessment',
        'Detailed plotting diagrams',
        'Internationally recognized certificates',
        'Digital verification system'
      ],
      process: [
        {
          step: 1,
          title: 'Initial Inspection',
          description: 'Visual examination and preliminary assessment of the diamond.'
        },
        {
          step: 2,
          title: 'Precision Measurement',
          description: 'Accurate measurements using calibrated instruments for carat weight and dimensions.'
        },
        {
          step: 3,
          title: 'Clarity Grading',
          description: 'Detailed analysis of internal and external characteristics under 10x magnification.'
        },
        {
          step: 4,
          title: 'Color Assessment',
          description: 'Color grading in controlled lighting conditions using master stones.'
        },
        {
          step: 5,
          title: 'Cut Analysis',
          description: 'Evaluation of proportions, symmetry, and polish for optimal light performance.'
        },
        {
          step: 6,
          title: 'Report Generation',
          description: 'Compilation of findings into a comprehensive certification report.'
        }
      ],
      // turnaround: '3-5 business days',
      // price: 'Starting from $150'
    },
    'jewelry-certification': {
      title: 'Jewellery Certification',
      image: jewelryCertification,
      description: 'Professional authentication and valuation of fine jewelry pieces.',
      features: [
        'Metal purity testing',
        'Identification and grading',
        'Craftsmanship assessment',
        'Market valuation',
        'Detailed photographic documentation',
        'Insurance appraisal reports'
      ],
      process: [
        {
          step: 1,
          title: 'Item Documentation',
          description: 'Comprehensive photographic documentation and initial assessment.'
        },
        {
          step: 2,
          title: 'Metal Analysis',
          description: 'Non-destructive testing to determine metal type and purity.'
        },
        {
          step: 3,
          title: 'Gemstone Evaluation',
          description: 'Individual assessment of all gemstones including identification and grading.'
        },
        {
          step: 4,
          title: 'Craftsmanship Review',
          description: 'Evaluation of construction quality, finishing, and design elements.'
        },
        {
          step: 5,
          title: 'Market Research',
          description: 'Current market analysis for accurate valuation assessment.'
        },
        {
          step: 6,
          title: 'Report Compilation',
          description: 'Creation of detailed certification and appraisal documentation.'
        }
      ],
      // turnaround: '5-7 business days',
      // price: 'Starting from $200'
    },
    'diamond-sealing': {
      title: 'Sealing of Diamonds',
      image: diamondSealing,
      description: 'Secure diamond sealing services with tamper-evident packaging.',
      features: [
        'Tamper-evident sealed containers',
        'Unique identification numbers',
        'QR code verification system',
        'Temperature-resistant sealing',
        'Chain of custody documentation',
        'Insurance coverage during sealing'
      ],
      process: [
        {
          step: 1,
          title: 'Diamond Verification',
          description: 'Confirmation of diamond identity and certification details.'
        },
        {
          step: 2,
          title: 'Photography',
          description: 'High-resolution imaging for permanent record keeping.'
        },
        {
          step: 3,
          title: 'Container Preparation',
          description: 'Preparation of tamper-evident sealing container with unique ID.'
        },
        {
          step: 4,
          title: 'Secure Sealing',
          description: 'Professional sealing process ensuring complete security and integrity.'
        },
        {
          step: 5,
          title: 'Documentation',
          description: 'Generation of sealing certificate and chain of custody records.'
        },
        {
          step: 6,
          title: 'Quality Control',
          description: 'Final inspection and verification of sealed package integrity.'
        }
      ],
      // turnaround: '1-2 business days',
      // price: 'Starting from $75'
    }
  };

  const currentService = services[activeService as keyof typeof services];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Diamond Testing & Certification Services | JP Diamond Lab Chennai</title>
        <meta name="description" content="Explore our diamond testing and certification services in Chennai. We provide accurate grading, professional reports, and trusted results."/>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Diamond Testing & Certification",
          "provider": {
            "@type": "LocalBusiness",
            "name": "JP Diamond Lab",
            "url": "https://www.jpdiamondlab.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600001",
              "addressCountry": "IN"
            },
            "telephone": "+91-XXXXXXXXXX"
          }
        }
        `}</script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-gradient-gold">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services backed by cutting-edge technology and unmatched expertise
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto p-1 bg-accent/50">
              <TabsTrigger
                value="diamond-certification"
                className="text-left p-4 data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                <div>
                  <div className="font-semibold">Diamond Certification</div>
                  <div className="text-xs text-muted-foreground mt-1">Complete 4Cs Analysis</div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="jewelry-certification"
                className="text-left p-4 data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                <div>
                  <div className="font-semibold">Jewelry Certification</div>
                  <div className="text-xs text-muted-foreground mt-1">Authentication & Valuation</div>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="diamond-sealing"
                className="text-left p-4 data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                <div>
                  <div className="font-semibold">Diamond Sealing</div>
                  <div className="text-xs text-muted-foreground mt-1">Secure & Tamper-Evident</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Image */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
                    />
                    {/* <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                      <div className="text-sm font-semibold">{service.turnaround}</div>
                    </div> */}
                  </div>

                  {/* Service Details */}
                  <div>
                    <h2 className="font-display text-4xl font-bold mb-4 text-gradient-gold">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-xl mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Turnaround */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <div className="flex items-center bg-accent/50 rounded-lg p-4 flex-1">
                        <Clock className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="font-semibold text-sm">Turnaround Time</div>
                          <div className="text-sm text-muted-foreground">{service.turnaround}</div>
                        </div>
                      </div>
                      <div className="flex items-center bg-accent/50 rounded-lg p-4 flex-1">
                        <Award className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="font-semibold text-sm">Pricing</div>
                          <div className="text-sm text-muted-foreground">{service.price}</div>
                        </div>
                      </div>
                    </div> */}

                    <Link to='/contact'>
                      <Button className="btn-gold w-full sm:w-auto">
                        Request Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Process Section */}
                <div className="mt-16">
                  <h3 className="font-display text-3xl font-bold mb-8 text-center text-gradient-gold">
                    Our Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="card-gold p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-yellow-400 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                          {step.step}
                        </div>
                        <h4 className="font-semibold text-lg mb-3">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-yellow-400/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Need Custom Services?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer specialized services tailored to your specific requirements. Contact us to discuss your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/contact'>
              <Button className="btn-gold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;