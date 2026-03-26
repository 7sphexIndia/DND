import React from 'react';
import Container from '../common/Container';
import btnIcon from '../../assets/images/symbol 1.svg';

const OfficeLocation: React.FC = () => {
  return (
    <section className="py-[60px] md:py-[100px]">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[#1F1F1F] text-[28px] md:text-[36px] font-medium mb-4 leading-[120%]">Visit Our Office</h2>
          <p className="text-[#6C6C6C] text-[16px] md:text-[18px]">
            You are welcome to visit our office during business hours for direct consultation.
          </p>
        </div>

        <div className="relative rounded-[10px] overflow-hidden shadow-lg h-[450px] md:h-[600px]">
          {/* Interactive Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74905866195!2d72.41459151172376!3d23.020473740254413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1774335630768!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 pt-32 pointer-events-none 
            bg-gradient-to-t 
            from-[#005948] 
            via-[#005948]/60 
            via-60% 
            to-transparent">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pointer-events-auto">
              <div className="text-white max-w-xl">
                <h3 className="text-white text-[18px] md:text-[22px] font-medium mb-3">Location and Accessibility</h3>
                <p className="text-[16px] md:text-[18px] leading-snug">
                  Conveniently located near Naroda GIDC, Ahmedabad with easy transport access.
                </p>
              </div>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=DRD+Plantech+LLP+Ahmedabad+Gujarat+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#005948] hover:bg-[#004a3b] text-white rounded-[5px] font-semibold transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Get Directions
                <img src={btnIcon} alt="icon" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfficeLocation;
