import React from 'react';
import SplitSection from '../common/SplitSection';
import commercialImg from '../../assets/images/commercial.webp';

const Commercial: React.FC = () => {
  return (
    <SplitSection
      variant="split"
      tag="Commercial Vegetable"
      title="Designed for Commercial Vegetable Growers"
      image={commercialImg}
      listTitle="Our hybrids are ideal for:"
      listItems={[
        'Multi-season cultivation',
        'Early harvesting cycles',
        'Long-distance transportation',
        'Export-oriented farming',
        'High market demand crops'
      ]}
      footerText="We support farmers with seeds that strengthen both yield and profitability."
    />
  );
};

export default Commercial;