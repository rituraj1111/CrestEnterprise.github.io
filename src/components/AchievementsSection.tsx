import { useEffect, useState, memo } from "react";

const AchievementsSection = memo(() => {
  const [counters, setCounters] = useState({
    customers: 0,
    experience: 0,
    deliveries: 0
  });

  const targets = {
    customers: 1000,
    experience: 9,
    deliveries: 5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        customers: Math.min(prev.customers + targets.customers / steps, targets.customers),
        experience: Math.min(prev.experience + targets.experience / steps, targets.experience),
        deliveries: Math.min(prev.deliveries + targets.deliveries / steps, targets.deliveries)
      }));
    }, interval);

    // Clear interval after animation completes
    setTimeout(() => {
      clearInterval(timer);
      setCounters(targets);
    }, duration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
              {Math.floor(counters.customers).toLocaleString()}+
            </div>
            <div className="text-lg font-medium text-foreground mb-2">Happy Customers</div>
            <div className="text-sm text-muted-foreground">
              Businesses trust us nationwide
            </div>
          </div>
          
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-3">
              {Math.floor(counters.experience)}+
            </div>
            <div className="text-lg font-medium text-foreground mb-2">Years Experience</div>
            <div className="text-sm text-muted-foreground">
              Industry expertise since 2015
            </div>
          </div>
          
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
              {Math.floor(counters.deliveries)}M+
            </div>
            <div className="text-lg font-medium text-foreground mb-2">Thermal Rolls Delivered</div>
            <div className="text-sm text-muted-foreground">
              Quality products delivered on time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AchievementsSection.displayName = 'AchievementsSection';

export default AchievementsSection;