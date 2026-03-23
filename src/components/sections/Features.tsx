import React from 'react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';

const Features: React.FC = () => {
  const features = [
    {
      title: "Disease Resistance",
      description: "Our seeds are bred to naturally resist common crop diseases, reducing the need for chemical pesticides.",
      icon: "🛡️",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Climate Adaptation",
      description: "Krushi seeds thrive in extreme weather conditions, ensuring consistent yield despite climate variability.",
      icon: "☀️",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Fast Growth Cycle",
      description: "Optimized genetics allow for shorter maturation periods, enabling farmers to have more crop cycles per year.",
      icon: "⚡",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Uniform Produce",
      description: "Get consistent fruit size, shape, and color that meets high-end commercial market standards.",
      icon: "⚖️",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "High Germination Rate",
      description: "We guarantee a 95%+ germination rate, ensuring that every seed you plant has the best chance to grow.",
      icon: "📈",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Superior Shelf Life",
      description: "Harvested crops stay fresh longer, reducing post-harvest losses and improving transportability.",
      icon: "📦",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
      
      <Container>
        <SectionHeader 
          title="Why Choose Krushi Hybrid Seeds?"
          subtitle="We combine traditional expertise with modern science to deliver seeds that outperform standard varieties."
          badge="OUR FEATURES"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-10 flex flex-col items-start bg-card border-none hover:bg-white transition-all duration-500 group">
              <div className={`w-14 h-14 ${feature.color} rounded-16 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold text-heading mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-subtext leading-relaxed text-lg">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
