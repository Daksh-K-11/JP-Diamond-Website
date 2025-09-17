import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '#127/222, JS Complex',
        'Shop No. 16, 2nd floor',
        'NSC Bose road',
        'Chennai – 600079'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+91 70105 22933',
        '+91 98415 72803'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@jpdiamondlab.in',
        // 'General: info@jpdiamondlab.in',
        // 'Services: services@jpdiamondlab.in',
        // 'Support: support@jpdiamondlab.in'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 10:00 AM - 8:00 PM',
        'Sunday: Closed',
        'IST (Indian Standard Time)'
      ]
    }
  ];

  // const officeLocations = [
  //   {
  //     name: 'New York Headquarters',
  //     address: '123 Diamond District, New York, NY 10001',
  //     phone: '+1 (555) 123-4567',
  //     manager: 'Dr. Sarah Mitchell'
  //   },
  //   {
  //     name: 'Los Angeles Branch',
  //     address: '456 Jewelry Row, Los Angeles, CA 90014',
  //     phone: '+1 (555) 987-6543',
  //     manager: 'Michael Chen'
  //   },
  //   {
  //     name: 'Miami Office',
  //     address: '789 Biscayne Blvd, Miami, FL 33132',
  //     phone: '+1 (555) 456-7890',
  //     manager: 'Isabella Rodriguez'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-gradient-gold">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert team for all your diamond certification needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-gradient-gold">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services? Need a custom quote? We're here to help.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select a service</option>
                    <option value="diamond-certification">Diamond Certification</option>
                    <option value="jewelry-certification">Jewelry Certification</option>
                    <option value="diamond-sealing">Diamond Sealing</option>
                    <option value="custom">Custom Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your requirements or questions..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button className="btn-gold w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-gradient-gold">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Multiple ways to reach us. We respond to all inquiries within 24 hours.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-yellow-400 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              {/* <div className="mt-12 space-y-4">
                <Button variant="outline" className="btn-outline-gold w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="btn-outline-gold w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Request Callback
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="section-padding bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-6 text-gradient-gold">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our conveniently located offices
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="card-gold p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">{location.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p className="font-medium text-foreground">Manager: {location.manager}</p>
                </div>
                <Button variant="outline" size="sm" className="btn-outline-gold">
                  Get Directions
                </Button>
              </div>
            ))}
          </div> */}
        {/* </div>
      </section> */}

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center text-gradient-gold">
            Find Us
          </h2>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">
                Detailed location map would be integrated here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      {/* <section className="section-padding bg-gradient-to-r from-primary/5 to-yellow-400/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">
            Emergency Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For urgent certification needs or time-sensitive projects, contact our emergency hotline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gold">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Hotline: +1 (555) 911-GEMS
            </Button>
            <Button variant="outline" className="btn-outline-gold">
              <Mail className="w-4 h-4 mr-2" />
              emergency@jpdiamondlab.com
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;