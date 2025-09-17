import Navigation from '@/components/Navigation';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Award, Users, Globe, Shield, CheckCircle } from 'lucide-react';
import aboutLab from '@/assets/about-lab.jpg';
import labTesting from '@/assets/lab-testing.jpg';

const About = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Jewelry Store Owner",
      company: "Elegant Gems",
      content: "JP Diamondlab has been our trusted certification partner for over 10 years. Their attention to detail and quick turnaround times have helped us build customer confidence.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Diamond Dealer",
      company: "Chen & Associates",
      content: "The precision and reliability of their reports are unmatched. Every certificate tells the complete story of the diamond with scientific accuracy.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Private Collector",
      company: "Rodriguez Collection",
      content: "Professional service and comprehensive reports. I trust jpdiamondlab for all my high-value diamond investments.",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Auction House Director",
      company: "Premium Auctions",
      content: "Their internationally recognized certifications add significant value to our auction pieces. Exceptional quality and service.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Gemologist",
      company: "Independent Appraiser",
      content: "As a fellow gemologist, I appreciate their thorough methodology and state-of-the-art equipment. Truly professional work.",
      rating: 5
    }
  ];

  // const achievements = [
  //   { icon: Award, title: "ISO 17025 Certified", description: "Internationally accredited testing laboratory" },
  //   { icon: Users, title: "50+ Expert Gemologists", description: "Certified professionals with decades of experience" },
  //   { icon: Globe, title: "Global Recognition", description: "Certificates accepted worldwide" },
  //   { icon: Shield, title: "Secure Facility", description: "State-of-the-art security and insurance coverage" }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutLab})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4 animate-in fade-in duration-700">
              About JP Diamondlab
            </h1>
            <p className="text-xl sm:text-2xl animate-in slide-in-from-bottom-8 duration-700 delay-200">
              Here to lead the industry in diamond certification
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 text-gradient-gold">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Equipped with advanced gemological instruments, we specialize in 
                  detecting natural vs. lab-grown diamonds, identifying simulants, and grading stones 
                  with precision. Every report is prepared to global standards, ensuring clarity and 
                  confidence in every transaction.
                </p>
                <p>
                  Integrity is at the heart of what we do. As an independent testing facility, we focus 
                  solely on providing honest results, handled with confidentiality and professionalism.
                </p>
                <p>
                  Our team combines technical expertise with a 
                  customer-first approach, making us your trusted partner in diamond verification.
                </p>
                <p>
                  We take pride in our role as guardians of diamond authenticity, helping consumers, 
                  retailers, and collectors make informed decisions with confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={labTesting}
                alt="Laboratory testing"
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6 text-gradient-gold">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and certifications that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center card-gold p-6">
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-gradient-gold">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To provide the most accurate, reliable, and comprehensive diamond certification 
                services in the industry, empowering our clients with the knowledge and confidence 
                they need to make informed decisions.
              </p>
              
              <div className="space-y-4">
                {[
                  "Scientific precision in every analysis",
                  "Transparent and detailed reporting",
                  "Commitment to continuous innovation",
                  "Building trust through excellence"
                ].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-gradient-gold">
                Our Values
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest ethical standards in all our operations and interactions.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Precision</h3>
                  <p className="text-muted-foreground">
                    Every analysis is conducted with meticulous attention to detail and scientific rigor.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously invest in cutting-edge technology and methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6 text-gradient-gold">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals and collectors worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {testimonials.slice(3).map((testimonial, index) => (
              <TestimonialCard key={index + 3} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-yellow-400/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust JP Diamondlab for their certification needs.
          </p>
          <Button className="btn-gold text-lg px-8 py-4 h-auto">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;