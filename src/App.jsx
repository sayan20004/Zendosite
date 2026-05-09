import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { AboutPage } from './pages/AboutPage';
import { Loader } from './components/ui/Loader';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('section');
      let bgColors = ['#E8D5B7', '#E8D5B7', '#E8D5B7', '#E8D5B7'];

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
      <Navbar />
      <HeroSection id="home" />
      <WhyChooseSection id="why-choose" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </main>
  );
}

function App() {
  return (
    <>
      <Loader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>

      {/* Sticky Product Hunt Badge — visible on all screens */}
      <a
        href="https://www.producthunt.com/products/zendo-4?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-zendo-4"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-[999] transition-transform duration-300 hover:scale-105 right-3 bottom-4 sm:bottom-1/4 sm:-translate-y-1/2"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1142169&theme=dark&t=1778297560393"
          alt="Zendo - Feature-rich Flutter task manager for daily productivity. | Product Hunt"
          width="250"
          height="54"
          className="rounded-lg shadow-lg w-[180px] sm:w-[250px]"
        />
      </a>
    </>
  );
}

export default App;
