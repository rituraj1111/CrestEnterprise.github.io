import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Factory, Truck, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const milestones = [
    { year: "2005", title: "Company Founded", description: "Started with a vision to provide quality thermal paper solutions" },
    { year: "2010", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2015", title: "Pan-India Expansion", description: "Expanded operations to serve customers across India" },
    { year: "2020", title: "Digital Transformation", description: "Modernized manufacturing with latest technology" },
    { year: "2023", title: "500+ Clients", description: "Reached milestone of serving 500+ satisfied customers" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "Every product undergoes rigorous quality checks to ensure superior performance and reliability.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We prioritize customer satisfaction with personalized service and timely support.",
    },
    {
      icon: Factory,
      title: "Innovation",
      description: "Continuous investment in technology and processes to deliver cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in manufacturing and service delivery.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "25+ years in paper manufacturing",
      description: "Visionary leader with deep industry expertise",
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      experience: "15+ years in production management",
      description: "Ensures smooth operations and quality control",
    },
    {
      name: "Amit Singh",
      position: "Sales Director",
      experience: "12+ years in B2B sales",
      description: "Drives business growth and customer relationships",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Crest Enterprise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the thermal paper industry with 18+ years of excellence, innovation, and unwavering commitment to quality.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005, Crest Enterprise began with a simple mission: to provide businesses 
                  across India with reliable, high-quality thermal paper solutions. What started as a 
                  small manufacturing unit has grown into one of the leading thermal paper suppliers in the country.
                </p>
                <p>
                  Over the years, we've built our reputation on the foundation of quality, reliability, 
                  and exceptional customer service. Our state-of-the-art manufacturing facility ensures 
                  that every thermal paper roll meets the highest industry standards.
                </p>
                <p>
                  Today, we proudly serve over 500 businesses across various industries, from small 
                  retail stores to large supermarket chains, helping them streamline their printing 
                  operations with our premium thermal paper products.
                </p>
              </div>
              <Button asChild className="mt-6 bg-gradient-primary hover:opacity-90">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">18+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Rolls Manufactured</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide every decision we make and every product we deliver.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                Key milestones that shaped our company's growth and success over the years.
              </p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-gradient-primary text-primary-foreground rounded-full px-4 py-2 font-bold min-w-fit">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the experienced professionals driving our company's vision and growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6">Why Choose Crest Enterprise?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>18+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>Pan-India Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>Custom Solutions</span>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Start Your Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;