import { Zap, Globe, BarChart3, Repeat, Shield, Sparkles } from 'lucide-react';
import { LottiePlaceholder } from "../ui/LottiePlaceholder";
import cyclingAnimation from "../../assets/cycling.json";

export function WhyChooseSection({ id }) {
  const features = [
    {
      icon: Zap,
      title: "Daily Momentum",
      desc: "Build streaks that keep you motivated and on track every single day.",
      accent: "bg-amber-500",
    },
    {
      icon: Globe,
      title: "Anywhere Access",
      desc: "Syncs seamlessly across all your devices — web, mobile, and tablet.",
      accent: "bg-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Simple Analytics",
      desc: "Understand your progress at a glance with beautiful visual insights.",
      accent: "bg-violet-500",
    },
    {
      icon: Repeat,
      title: "Smart Routines",
      desc: "Automate repeating tasks and let Zendo handle the scheduling.",
      accent: "bg-rose-500",
    },
    {
      icon: Shield,
      title: "Privacy First",
      desc: "Your data stays yours. End-to-end encryption keeps everything safe.",
      accent: "bg-sky-500",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      desc: "Intelligent suggestions that learn your habits and optimize your day.",
      accent: "bg-orange-500",
    },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-[10%] overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="gsap-slide-up text-xs font-semibold tracking-[0.25em] text-brand-black/50 uppercase mb-4">
              Why Choose Zendo
            </p>
            <h2 className="gsap-slide-up font-black text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-0.04em] text-brand-black uppercase">
              Track<br />Anytime,<br />Anywhere
            </h2>
          </div>
          <p className="gsap-slide-up text-base sm:text-lg md:text-xl font-medium text-brand-black/60 max-w-md lg:pb-2">
            It's not just about tasks; it's about building a tracking habit that sticks with you for life.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="gsap-slide-up group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-brand-black/5 hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl ${feature.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-brand-black mb-1 sm:mb-1.5">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-brand-black/55 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Visual — Cycling Animation */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-16">
        <div className="gsap-fade-in relative bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-brand-black/5 overflow-hidden p-4 sm:p-6 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
            {/* Lottie */}
            <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[400px]">
              <LottiePlaceholder
                src={cyclingAnimation}
                fallbackText="Cycling Mascot Animation"
                className="rounded-2xl bg-white/50"
              />
            </div>

            {/* Stats */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-black/40 uppercase mb-2">
                  Performance
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black leading-tight">
                  93% of users<br />build lasting habits
                </h3>
              </div>

              <div className="flex gap-3 sm:gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex-1 border border-brand-black/5">
                  <p className="text-2xl sm:text-3xl font-black text-brand-black">4.8</p>
                  <p className="text-xs text-brand-black/50 font-semibold mt-1">App Store Rating</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex-1 border border-brand-black/5">
                  <p className="text-2xl sm:text-3xl font-black text-brand-black">50K+</p>
                  <p className="text-xs text-brand-black/50 font-semibold mt-1">Active Users</p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-brand-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-brand-black">Task Completion Rate</span>
                  <span className="text-sm font-black text-brand-black">87%</span>
                </div>
                <div className="w-full h-2 bg-brand-black/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-black rounded-full" style={{ width: '87%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
