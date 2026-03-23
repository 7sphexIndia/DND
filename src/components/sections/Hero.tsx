import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import heroBg from '../../assets/images/hero_bg.png';
import tagIcon from '../../assets/images/apme_symbol-white.svg';
import icon from '../../assets/images/symbol 1.svg';


const Hero: React.FC = () => {
  return (
    <section className="relative py-[60px] lg:py-0 lg:h-screen lg:min-h-[700px] flex items-center mx-[20px] rounded-[10px] overflow-hidden">      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 mt-8 md:mt-0">
            <img src={tagIcon} alt="icon" className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
            <p className="text-white text-[14px] md:text-[16px] tracking-wide">
              Welcome To Our Plantech
            </p>
          </div>
          <h1 className="text-white mb-6 leading-[1.2] md:leading-[1.2] text-[32px] sm:text-4xl md:text-6xl tracking-[0.011em]">
            Hybrid Vegetable Seeds <br className="hidden md:block" />
            Built for Higher Yield & <br className="hidden md:block" />
            Stronger Performance
          </h1>
          <p className="text-[15px] md:text-[18px] text-white mb-10 md:mb-12 max-w-2xl font-body tracking-[0.011em]">
            Delivering high-performance hybrid vegetable seeds designed for commercial farmers, dealers, and modern agriculture markets. Our varieties are developed for superior yield, disease resistance, uniform quality, and dependable results across seasons.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center gap-[10px] px-[18px] py-[17px] rounded-[5px] bg-[#F26A21] text-white text-[16px] font-semibold leading-[120%] hover:opacity-90 transition"
            >
              Explore Our Products
              <img src={icon} alt="icon" className="w-[18px] h-[18px]" />
            </Button>
            <Button
              variant="white"
              size="lg"
              className="flex items-center gap-[10px] px-[18px] py-[17px] rounded-[5px] !bg-transparent border !border-white text-white text-[16px] font-semibold leading-[120%] hover:!bg-white/10 transition"
            >
              Become a Dealer
              <img src={icon} alt="icon" className="w-[18px] h-[18px]" />
            </Button>
          </div>
        </div>
      </Container>
      
    </section>
  );
};

export default Hero;
