import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/sections/Navbar';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactForm } from '../components/ui/ContactForm';
import { LottiePlaceholder } from '../components/ui/LottiePlaceholder';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide up animations for text
      gsap.utils.toArray('.gsap-slide-up').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Fade in animations for visual elements
      gsap.utils.toArray('.gsap-fade-in').forEach((elem) => {
        gsap.fromTo(elem, 
          { opacity: 0, scale: 0.95 },
          { 
            opacity: 1, 
            scale: 1,
            duration: 1.2, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="w-full min-h-screen bg-brand-orange">
      <Navbar />
      
      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
            <h2 className="gsap-slide-up text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.95] -tracking-[0.03em] uppercase">
              You'll Crave <br />
              Doing Your <br />
              Work
            </h2>
            
            <p className="gsap-slide-up text-xl md:text-2xl font-bold text-brand-black max-w-lg leading-relaxed">
              Our mission is simple: to make adding and repeating tasks so satisfying that you actually look forward to it. Zendo mixes different tracking styles to keep you engaged.
            </p>

            <p className="gsap-slide-up text-lg md:text-xl font-medium text-brand-black/80 max-w-lg leading-relaxed">
              We believe that productivity doesn't have to feel like a chore. With thoughtful design and engaging interactions, every task becomes an opportunity to build momentum and celebrate progress.
            </p>
          </div>

          {/* Visual Content */}
          <div className="gsap-fade-in w-full h-[400px] lg:h-[600px] relative order-1 lg:order-2">
            <LottiePlaceholder 
              src="/animations/working.json"
              fallbackText="Celebration Mascot Animation" 
              className="rounded-[3rem] border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-brand-white"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 bg-brand-yellow">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="gsap-slide-up text-5xl md:text-7xl lg:text-[6rem] leading-[1] uppercase text-brand-black">
              Let's Talk
            </h2>
            <p className="gsap-slide-up text-xl md:text-2xl font-medium text-brand-black/80 mt-6">
              Have questions or just want to say hi? Drop us a line.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
