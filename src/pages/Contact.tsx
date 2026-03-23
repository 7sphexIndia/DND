import React, { useState } from 'react';
import Container from '../components/common/Container';
import aboutBg from '../assets/images/about_bg.png';
import { ChevronDown, Clock } from 'lucide-react';
import locationIcon from '../assets/images/location.svg';
import callIcon from '../assets/images/call.svg';
import emailIcon from '../assets/images/email.svg';
import btnIcon from '../assets/images/apme_symbol-white.svg';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', phone: '', email: '', company: '', city: '', inquiryType: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const inputClass = "w-full bg-white rounded-[6px] px-[20px] py-[16px] text-[14px] text-[#333333] focus:outline-none focus:ring-1 focus:ring-[#005948] peer";
  const labelClass = "absolute left-[20px] top-[18px] text-[#6C6C6C] text-[14px] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100 transition-opacity";

  return (
    <>
      <section 
        className="mx-[20px] rounded-[10px] bg-[#0F5D4E] mt-[20px] mb-[80px] relative overflow-hidden flex items-center bg-cover bg-center py-20 lg:py-28"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <Container className="relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-[56px] font-medium tracking-[0.011em] leading-[1.2] mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-[16px] sm:text-[18px] leading-[1.6] mb-10 max-w-2xl">
              Get in touch with our team for product inquiries, dealership opportunities, bulk orders, and crop advisory support. We are committed to providing prompt, professional assistance to farmers, dealers, and agricultural partners.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                className="flex items-center gap-[10px] bg-[#F26A21] hover:bg-[#D95D1A] text-white px-7 py-[14px] rounded-[5px] font-medium transition-colors"
                onClick={() => window.scrollTo({ top: document.getElementById('contact-form')?.offsetTop, behavior: 'smooth' })}
              >
                Send Inquiry <img src={btnIcon} alt="icon" className="w-[18px] h-[18px]" />
              </button>
              <a 
                href="tel:+917984109698"
                className="group flex items-center gap-[10px] border border-white text-white hover:bg-white hover:text-[#0F5D4E] px-7 py-[14px] rounded-[5px] font-medium transition-colors"
              >
                Call Now <img src={btnIcon} alt="icon" className="w-[18px] h-[18px] transition-all group-hover:brightness-0" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="mb-[100px]" id="contact-form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] lg:gap-[80px]">
            
            {/* Left Column: Contact Details */}
            <div className="flex flex-col lg:col-span-5">
              <h2 className="text-[#1F1F1F] text-[32px] sm:text-[36px] font-medium leading-[1.2] mb-4">
                Our Contact Details
              </h2>
              <p className="text-[#4A4A4A] text-[16px] sm:text-[18px] mb-12 leading-[1.6]">
                We ensure transparent and accessible communication for all business and farming inquiries.
              </p>

              <div className="flex flex-col gap-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[#F26A21] flex items-center justify-center shrink-0">
                    <img src={locationIcon} className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <h4 className="text-[#6C6C6C] text-[13px] font-medium mb-[6px] uppercase tracking-wider">Registered Office Address</h4>
                    <p className="text-[#1F1F1F] font-semibold text-[17px] mb-1">DRD Plantech LLP</p>
                    <p className="text-[#4A4A4A] text-[15px] leading-[1.6]">
                      A/55, Fortune North Industrial Park, B/H Gamthi Hotel, Nana Chiloda Circle, Near Naroda GIDC, Ahmedabad – 382330, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[#F26A21] flex items-center justify-center shrink-0">
                    <img src={callIcon} className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <h4 className="text-[#6C6C6C] text-[13px] font-medium mb-[6px] uppercase tracking-wider">Phone and WhatsApp</h4>
                    <p className="text-[#1F1F1F] font-semibold text-[17px]">+91 79841 09698</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[#F26A21] flex items-center justify-center shrink-0">
                    <img src={emailIcon} className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <h4 className="text-[#6C6C6C] text-[13px] font-medium mb-[6px] uppercase tracking-wider">Email Us</h4>
                    <p className="text-[#1F1F1F] font-semibold text-[17px]">info@drdplantech.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-[52px] h-[52px] rounded-[10px] bg-[#F26A21] flex items-center justify-center shrink-0 text-white">
                    <Clock size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-[#6C6C6C] text-[13px] font-medium mb-[6px] uppercase tracking-wider">Business Hours</h4>
                    <p className="text-[#1F1F1F] font-semibold text-[17px]">Monday – Saturday</p>
                    <p className="text-[#1F1F1F] font-semibold text-[17px]">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-[#FAF9F6] p-8 sm:p-12 rounded-[12px] lg:col-span-7 h-fit">
              <h3 className="text-[#1F1F1F] text-[24px] sm:text-[28px] font-semibold mb-4">
                Send Us a Message
              </h3>
              <p className="text-[#4A4A4A] text-[15px] leading-[1.6] mb-8">
                Have a question about hybrid vegetable seeds, crop selection, or dealership? Fill out the inquiry form below and our team will respond promptly.
              </p>

              {submitSuccess ? (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#005948]/10 text-[#005948] rounded-full flex items-center justify-center text-3xl">✓</div>
                  <h4 className="text-2xl font-medium text-[#1F1F1F]">Message Sent Successfully!</h4>
                  <p className="text-[#6C6C6C]">Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input required type="text" name="name" value={formState.name} onChange={handleChange} placeholder=" " className={inputClass} />
                      <label className={labelClass}>Full Name <span className="text-[#F26A21]">*</span></label>
                    </div>
                    <div className="relative">
                      <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder=" " className={inputClass} />
                      <label className={labelClass}>Phone Number <span className="text-[#F26A21]">*</span></label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input required type="email" name="email" value={formState.email} onChange={handleChange} placeholder=" " className={inputClass} />
                      <label className={labelClass}>Email Address <span className="text-[#F26A21]">*</span></label>
                    </div>
                    <div className="relative">
                      <input required type="text" name="company" value={formState.company} onChange={handleChange} placeholder=" " className={inputClass} />
                      <label className={labelClass}>Company Name <span className="text-[#F26A21]">*</span></label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input required type="text" name="city" value={formState.city} onChange={handleChange} placeholder=" " className={inputClass} />
                      <label className={labelClass}>City/Location <span className="text-[#F26A21]">*</span></label>
                    </div>
                    <div className="relative">
                      <select required name="inquiryType" value={formState.inquiryType} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`} >
                        <option value="" disabled hidden></option>
                        <option value="sales">Sales & Dealership</option>
                        <option value="product">Product Information</option>
                        <option value="support">Agronomy Support</option>
                        <option value="other">Other</option>
                      </select>
                      {!formState.inquiryType && (
                        <label className="absolute left-[20px] top-[18px] text-[#8C8C8C] text-[14px] pointer-events-none">
                          Inquiry Type <span className="text-[#F26A21]">*</span>
                        </label>
                      )}
                      <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none text-[#6C6C6C]">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-4">
                    <textarea required name="message" value={formState.message} onChange={handleChange} rows={5} placeholder=" " className={`${inputClass} resize-none`} />
                    <label className={labelClass}>Message <span className="text-[#F26A21]">*</span></label>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="self-start flex items-center gap-[10px] px-[26px] py-[16px] rounded-[5px] bg-[#005948] hover:bg-[#004235] text-white text-[15px] font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Get in Touch Today'}
                    {!isSubmitting && <img src={btnIcon} alt="icon" className="w-[18px] h-[18px]" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
