import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import Navigation from '@/components/Navigation';
import { Phone, Mail, MapPin, Shield, Award, Users } from 'lucide-react';
import diamondCertification from '@/assets/diamond-certification.jpg';
import jewelryCertification from '@/assets/jewelery-certification.jpg';
import diamondSealing from '@/assets/diamond-sealing.jpg';

const Index = () => {
  const services = [
    {
      image: diamondCertification,
      title: "Diamond Certification",
      description: "Comprehensive analysis and grading of diamonds with internationally recognized standards. Our certified gemologists provide detailed reports on cut, clarity, color, and carat weight."
    },
    {
      image: jewelryCertification,
      title: "Jewellery Certification",
      description: "Professional authentication and valuation of fine jewelry pieces. Complete assessment of precious metals, gemstones, and craftsmanship quality."
    },
    {
      image: diamondSealing,
      title: "Sealing of Diamonds",
      description: "Secure diamond sealing services with tamper-evident packaging. Ensures the integrity and authenticity of certified diamonds throughout the supply chain."
    }
  ];

  const stats = [
    { icon: Shield, value: "25+", label: "Years Experience" },
    { icon: Award, value: "50K+", label: "Certified Diamonds" },
    { icon: Users, value: "1000+", label: "Satisfied Clients" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Preview Section */}
      <section className="section-padding bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-gradient-gold">
            About JP Diamondlab
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            JP Diamond is a professional diamond testing laboratory established to bring
            transparency & trust to the jewelry market. Our lab is equipped with advance testing
            instruments and operated by skilled gemologists who follow international standards.
            From checking authenticity to identifying treatments, we ensure every report 
            reflects precision and integrity.
          </p>
          
          {/* Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-in zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}

          <Link to="/about">
            <Button className="btn-gold text-lg px-8 py-4 h-auto">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-gradient-gold">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive gemological services backed by cutting-edge technology and unmatched expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
                onClick={() => window.location.href = '/services'}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="btn-outline-gold text-lg px-8 py-4 h-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-yellow-400/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Certify Your Diamonds?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for professional diamond certification services. 
            We're here to help you with all your gemological needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center sm:justify-start">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Mail className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">info@jpdiamondlab.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">New York, NY</span>
            </div>
          </div>

          <Link to="/contact">
            <Button className="btn-gold text-lg px-8 py-4 h-auto">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
