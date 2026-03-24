import React from 'react';
import SplitSection from '../common/SplitSection';
import researchImg from '../../assets/images/research.webp';

const Featured: React.FC = () => {
  return (
    <SplitSection
      variant="split"
      tag="Research & Innovation"
      title="Backed by Field Trials and Quality Testing"
      image={researchImg}
      listTitle="Every variety is developed through structured hybrid breeding programs and extensive field evaluations. We focus on:"
      listItems={[
        'Genetic purity',
        'Crop adaptability',
        'Disease tolerance',
        'Yield stability',
        'Germination performance'
      ]}
      footerText="Our commitment to research ensures dependable results in diverse climatic conditions."
    />
  );
};

export default Featured;