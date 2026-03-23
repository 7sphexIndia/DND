import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Categories from '../components/sections/Categories';
import FieldTrials from '../components/sections/FieldTrials';
import Featured from '../components/sections/Featured';
import KnowledgeCenter from '../components/sections/KnowledgeCenter';
import Insights from '../components/sections/Insights';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';
import ContactForm from '../components/sections/ContactForm';
import Commercial from '../components/sections/Commercial';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <FieldTrials />
      <Featured />
      <KnowledgeCenter />
      <Commercial /> 
      <Insights />
      <CTA 
        tagText="Become a Dealer Partner"
        title="Grow Your Business with a Trusted Seed Brand"
        description="We offer strong product demand, reliable supply, and structured dealer support. Join our expanding distribution network and serve the growing agricultural market with confidence."
        buttonText="Apply for Dealership"
      />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Home;
