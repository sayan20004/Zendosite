import { ContactForm } from "../ui/ContactForm";
import { Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection({ id }) {
  return (
    <section
      id={id}
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-[10%] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <p className="gsap-slide-up text-xs font-semibold tracking-[0.25em] text-brand-black/50 uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="gsap-slide-up font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-0.04em] text-brand-black uppercase">
              Let's<br />Talk
            </h2>
          </div>
          <p className="gsap-slide-up text-base sm:text-lg md:text-xl font-medium text-brand-black/60 max-w-md lg:pb-2">
            Have questions or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Info Cards */}
          <div className="lg:w-2/5 grid grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
            <div className="gsap-slide-up bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-black/5 hover:bg-white/70 transition-all duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-black flex items-center justify-center mb-2 sm:mb-4">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-brand-black mb-0.5 sm:mb-1">Email Us</h3>
              <p className="text-xs sm:text-sm text-brand-black/50 font-medium break-all sm:break-normal">tm.zendo@gmail.com</p>
            </div>

            <div className="gsap-slide-up bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-black/5 hover:bg-white/70 transition-all duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-black flex items-center justify-center mb-2 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-brand-black mb-0.5 sm:mb-1">Location</h3>
              <p className="text-xs sm:text-sm text-brand-black/50 font-medium">India — Remote</p>
            </div>

            <div className="gsap-slide-up bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-black/5 hover:bg-white/70 transition-all duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-black flex items-center justify-center mb-2 sm:mb-4">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-brand-black mb-0.5 sm:mb-1">Response</h3>
              <p className="text-xs sm:text-sm text-brand-black/50 font-medium">Within 24h</p>
            </div>

            {/* Mini CTA */}
            {/* <div className="gsap-slide-up bg-brand-black rounded-2xl p-6 text-center">
              <p className="text-brand-white/80 text-sm font-medium mb-2">Prefer social media?</p>
              <div className="flex items-center justify-center gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-white/50 hover:text-brand-white text-xs font-bold uppercase tracking-wider transition-colors">
                  Twitter
                </a>
                <span className="text-brand-white/20">•</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-white/50 hover:text-brand-white text-xs font-bold uppercase tracking-wider transition-colors">
                  LinkedIn
                </a>
                <span className="text-brand-white/20">•</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-white/50 hover:text-brand-white text-xs font-bold uppercase tracking-wider transition-colors">
                  GitHub
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 gsap-slide-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
