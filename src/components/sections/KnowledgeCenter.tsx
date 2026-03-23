import React from 'react';
import icon from '../../assets/images/apme_symbol-green.svg';
import featuredImg from '../../assets/images/featured.png';
import btnIcon from '../../assets/images/apme_symbol-white.svg';
import Container from '../common/Container';

const KnowledgeCenter: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[100px]">
      
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-8 lg:gap-16 items-stretch">

          {/* Left Content */}
          <div className="flex flex-col justify-between h-full">

            {/* Top Content */}
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <img src={icon} className="w-[16px] h-[16px]" />
                <p className="text-[#005948] text-[14px] font-medium">
                  Featured
                </p>
              </div>

              {/* Heading */}
              <h2 className="text-[#1F1F1F] text-[36px] font-medium leading-[1.2] mb-6">
                Featured Hybrids
              </h2>

              {/* Description */}
              <p className="text-[#333333] text-[16px] leading-[1.2] max-w-[420px]">
                Explore some of our top-performing varieties designed for commercial cultivation. Each hybrid is selected for productivity, uniformity, and market acceptance.
              </p>
            </div>

            {/* Button (Bottom aligned) */}
            <div className="mt-6 lg:mt-10">
              <button className="flex items-center gap-[10px] px-[18px] py-[17px] rounded-[5px] bg-[#005948] text-white text-[16px] font-semibold">
                Discover Top Varieties
                <img src={btnIcon} className="w-[18px] h-[18px]" />
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="h-full rounded-[10px] overflow-hidden">
            <img
              src={featuredImg}
              alt="Featured Hybrids"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </Container>

    </section>
  );
};

export default KnowledgeCenter;