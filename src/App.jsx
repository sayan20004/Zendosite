import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/sections/Navbar'; // Import the new component
import { HeroSection } from './components/sections/HeroSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('section');
      let bgColors = ['#FFD60A', '#C5B8F0', '#FF9966', '#FFD60A']; 

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => gsap.to(mainRef.current, { backgroundColor: bgColors[i], duration: 0.8, ease: 'power2.inOut' }),
          onEnterBack: () => gsap.to(mainRef.current, { backgroundColor: bgColors[i], duration: 0.8, ease: 'power2.inOut' }),
        });
      });

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
    <main ref={mainRef} className="w-full min-h-screen transition-colors duration-300">
      <Navbar /> {/* Add Navbar here */}
      <HeroSection id="home" />
      <WhyChooseSection id="why-choose" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </main>
  );
}

export default App;
