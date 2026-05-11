import { useState, useEffect } from 'react';
import { Play, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import appLogo from '../../assets/bolt.png';

export function HeroSection({ id }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Close video on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    if (showVideo) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [showVideo]);

  return (
    <section
      id={id}
      className="hero-section relative min-h-screen overflow-hidden p-5"
      style={{ background: 'linear-gradient(135deg, #E8D5B7 0%, #F2E6D0 40%, #E0CBA8 100%)' }}
    >
      {/* ═══════════ MAIN HERO TEXT ═══════════ */}
      <div className="hero-text-container absolute inset-0 flex items-start pt-16 lg:pt-20 px-4 lg:px-[10%] pointer-events-none select-none z-10">
        {/* FOCUS — left side */}
        <h1 className="hero-title-left gsap-slide-up font-black text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[14rem] leading-[0.85] tracking-[-0.06em] text-brand-black uppercase">
          FOCUS
        </h1>
      </div>

      {/* YOUR TIME — right side */}
      <div className="hero-text-right absolute top-16 lg:top-20 right-4 sm:right-[10%] lg:right-[10%] pointer-events-none select-none z-10 text-right">
        <h1 className="hero-title-right gsap-slide-up font-black text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] 2xl:text-[14rem] leading-[0.85] tracking-[-0.06em] text-brand-black uppercase">
          YOUR
          <br />
          TIME
        </h1>
      </div>

      {/* ═══════════ APP LOGO — Center ═══════════ */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <img
          src={appLogo}
          alt="Zendo App Logo"
          className="w-[160px] sm:w-[240px] md:w-[320px] lg:w-[380px] xl:w-[440px] h-auto object-contain drop-shadow-2xl hero-bolt-float rounded-[2rem] sm:rounded-[3rem]"
        />
      </div>

      <div
        className="gsap-slide-up absolute left-4 sm:left-[5%] lg:left-[10%] top-[55%] sm:top-[48%] md:top-[44%] z-30 flex items-center gap-2.5 group cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
          <Play className="w-5 h-5 text-brand-white fill-brand-white ml-0.5" />
        </div>
        <div>
          <p className="text-xs sm:text-sm font-bold text-brand-black leading-tight">How It Works</p>
          <p className="text-[10px] sm:text-xs text-brand-black/60 leading-tight hidden sm:block">Watch the video to<br />see how it works.</p>
        </div>
      </div>

      {/* ═══════════ TASK STATUS CARDS — left overlay ═══════════ */}
      <div className="gsap-slide-up absolute left-4 sm:left-[5%] lg:left-[10%] top-[62%] sm:top-[55%] md:top-[52%] z-30 hidden md:flex flex-col gap-1.5">
        {/* Task row 1 */}
        <div className="hero-card flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
          <span className="text-sm font-semibold text-brand-black/80">App Design</span>
          <span className="px-3 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">High</span>
          <span className="text-sm text-brand-black/60 font-medium">In Progress</span>
          <span className="text-sm text-brand-black/40 font-medium">4h</span>
        </div>
        {/* Task row 2 */}
        <div className="hero-card flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
          <span className="text-sm font-semibold text-brand-black/80">Team Meeting</span>
          <span className="px-3 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">Medium</span>
          <span className="text-sm text-brand-black/60 font-medium">Scheduled</span>
          <span className="text-sm text-brand-black/40 font-medium">30m</span>
        </div>
      </div>

      {/* ═══════════ TODAY'S TASKS CARD — right overlay ═══════════ */}
      <div className="gsap-slide-up absolute right-4 lg:right-[10%] top-[35%] sm:top-[32%] md:top-[35%] z-30 hidden md:block">
        <div className="hero-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg w-[280px] lg:w-[320px] xl:w-[340px]">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h3 className="text-lg font-bold text-brand-black">Today's Tasks</h3>
              <p className="text-xs text-brand-black/50">To-do list for today...</p>
            </div>
            <div className="w-8 h-8 rounded-xl bg-brand-black/5 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-brand-black/70" />
            </div>
          </div>

          <div className="flex gap-2.5 mt-3">
            {/* Task card 1 */}
            <div className="flex-1 border border-brand-black/10 rounded-2xl p-3">
              <p className="text-[10px] text-brand-black/50 font-medium">24.03 &nbsp; 10:00 AM</p>
              <p className="text-sm font-bold text-brand-black mt-1 leading-tight">Mobile App Design</p>
              <p className="text-xs text-brand-black/50 mt-0.5">4 Hours Per Task</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-brand-black/60 font-medium">In Progress</span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
              </div>
            </div>
            {/* Task card 2 */}
            <div className="flex-1 border border-brand-black/10 rounded-2xl p-3">
              <p className="text-[10px] text-brand-black/50 font-medium">24.03 &nbsp; 02:00 PM</p>
              <p className="text-sm font-bold text-brand-black mt-1 leading-tight">Dashboard Design</p>
              <p className="text-xs text-brand-black/50 mt-0.5">3 Hours Per Task</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-brand-black/60 font-medium">Scheduled</span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ BOTTOM LEFT — Focus Text + Carousel ═══════════ */}
      <div className="gsap-slide-up absolute bottom-16 sm:bottom-8 left-4 lg:left-[10%] z-30 max-w-[250px] sm:max-w-xs">
        {/* Slide content */}
        <div className="relative overflow-hidden">
          {[
            { title: 'Focus on What Matters Today', desc: 'Track your most important tasks as they are intelligently prioritized and scheduled by AI.' },
            { title: 'AI-Powered Scheduling', desc: 'Let Zendo automatically organize your day based on deadlines, priority, and your energy levels.' },
            { title: 'Build Better Habits', desc: 'Track streaks, set daily goals, and get gentle nudges to stay consistent with your routines.' },
            { title: 'Team Collaboration', desc: 'Share tasks, assign work, and keep everyone aligned with real-time progress tracking.' },
            { title: 'Smart Notifications', desc: 'Get reminded at the right time — not too early, not too late. Zendo learns your rhythm.' },
          ].map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ease-in-out ${i === currentSlide
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-black leading-snug">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-black/60 mt-1 sm:mt-1.5 leading-relaxed">
                {slide.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2.5 mt-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-brand-black/20 flex items-center justify-center hover:bg-brand-black hover:text-brand-white hover:border-brand-black transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`rounded-full transition-all duration-300 ${i === currentSlide
                  ? 'w-6 h-2.5 bg-brand-black'
                  : 'w-2.5 h-2.5 bg-brand-black/20 hover:bg-brand-black/40'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-black text-brand-white flex items-center justify-center hover:bg-brand-black/80 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ═══════════ BOTTOM RIGHT — Tagline ═══════════ */}
      <div className="gsap-slide-up absolute bottom-6 sm:bottom-8 right-4 lg:right-10 z-30 text-right max-w-xs hidden sm:block">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-brand-black/60 uppercase leading-relaxed">
          SMART WIDGETS THAT ADAPT TO YOUR<br />
          WORKFLOW ON WEB AND MOBILE
        </p>
      </div>

      {/* ═══════════ VIDEO MODAL — OpenAI-style ═══════════ */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center video-modal-backdrop"
          onClick={() => setShowVideo(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Close button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Video container */}
          <div
            className="relative z-10 w-[95vw] sm:w-[90vw] max-w-[960px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl video-modal-content mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              // src="https://www.youtube.com/embed/XylGhMEsCeY?autoplay=1&rel=0&modestbranding=1"
              title="How Zendo Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
