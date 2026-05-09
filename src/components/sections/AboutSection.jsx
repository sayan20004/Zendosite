import { ArrowRight, Download } from 'lucide-react';
import { LottiePlaceholder } from "../ui/LottiePlaceholder";
import workingAnimation from "../../assets/working.json";

export function AboutSection({ id }) {
  const milestones = [
    { year: '2024', label: 'Idea Born', desc: 'Started as a personal productivity experiment.' },
    { year: '2024', label: 'First Build', desc: 'Built with Flutter for cross-platform performance.' },
    { year: '2025', label: 'Public Launch', desc: 'Released on Play Store with 1K+ downloads.' },
    { year: '2025', label: 'AI Features', desc: 'Integrated smart scheduling and habit tracking.' },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-[10%] overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 mb-10 sm:mb-16">
          <div className="lg:w-1/2">
            <p className="gsap-slide-up text-xs font-semibold tracking-[0.25em] text-brand-black/50 uppercase mb-4">
              About Zendo
            </p>
            <h2 className="gsap-slide-up font-black text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-0.04em] text-brand-black uppercase">
              You'll Crave<br />Doing Your<br />Work
            </h2>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-end gap-6">
            <p className="gsap-slide-up text-base sm:text-lg md:text-xl font-medium text-brand-black/60 leading-relaxed">
              Our mission is simple: to make adding and repeating tasks so satisfying that you actually look forward to it. Zendo mixes different tracking styles to keep you engaged.
            </p>
            <div className="gsap-slide-up">
              <button
                onClick={() => window.open('https://drive.google.com/drive/folders/11yXN9Icjq44XT0lNpshZroMOachoCGY4?usp=share_link', '_blank')}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-black text-brand-white font-semibold text-sm sm:text-base rounded-full hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <Download className="w-4 h-4" />
                Download App
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Animation + Timeline */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lottie Animation Card */}
          <div className="gsap-fade-in lg:w-3/5 bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-brand-black/5 overflow-hidden p-4 sm:p-6">
            <div className="h-[250px] sm:h-[350px] lg:h-[450px]">
              <LottiePlaceholder
                src={workingAnimation}
                fallbackText="Celebration Mascot Animation"
                className="rounded-2xl bg-white/30"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:w-2/5 flex flex-col gap-3">
            <p className="gsap-slide-up text-xs font-semibold tracking-[0.2em] text-brand-black/40 uppercase mb-2">
              Our Journey
            </p>
            {milestones.map((m, i) => (
              <div
                key={i}
                className="gsap-slide-up group bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-brand-black/5 hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs font-bold text-brand-black/40 bg-brand-black/5 px-2.5 py-1 rounded-full">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-brand-black">{m.label}</h4>
                </div>
                <p className="text-sm text-brand-black/50 font-medium leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom marquee-style tagline */}
        <div className="mt-10 sm:mt-16 gsap-slide-up">
          <div className="bg-brand-black rounded-xl sm:rounded-2xl px-5 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-brand-white/60 text-sm font-semibold tracking-[0.15em] uppercase">
              Built with ❤️ using Flutter & Supabase
            </p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-brand-white text-sm font-bold">v2.0 — Live Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
