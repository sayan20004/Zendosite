import { LottiePlaceholder } from "../ui/LottiePlaceholder";
import cyclingAnimation from "../../assets/cycling.json";

export function WhyChooseSection({ id }) {
  const features = [
    { title: "Daily Momentum", desc: "Build streaks that keep you motivated." },
    { title: "Anywhere Access", desc: "Syncs seamlessly across all your devices." },
    { title: "Simple Analytics", desc: "Understand your progress at a glance." },
  ];

  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="gsap-slide-up text-5xl md:text-7xl lg:text-[5rem] leading-[1] uppercase">
            Track Anytime, <br /> Easily Anywhere
          </h2>
          <p className="gsap-slide-up text-xl md:text-2xl font-medium text-brand-black/80">
            It's not just about tasks; it's about building a tracking habit that sticks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Content */}
          <div className="gsap-fade-in w-full h-[400px] lg:h-[500px] relative order-2 lg:order-1">
            <LottiePlaceholder 
              src={cyclingAnimation}
              fallbackText="Cycling Mascot Animation" 
              className="rounded-[3rem] border-4 border-brand-black shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] bg-brand-white"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="gsap-slide-up p-8 rounded-3xl bg-brand-black text-brand-white transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-4 h-4 rounded-full bg-brand-yellow animate-pulse" />
                  <h3 className="text-2xl text-brand-white font-bold m-0">{feature.title}</h3>
                </div>
                <p className="text-brand-white/80 font-medium text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
