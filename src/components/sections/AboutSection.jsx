import { LottiePlaceholder } from "../ui/LottiePlaceholder";
import workingAnimation from "../../assets/working.json";

export function AboutSection({ id }) {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20"
    >
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
        </div>

        {/* Visual Content */}
        <div className="gsap-fade-in w-full h-[400px] lg:h-[600px] relative order-1 lg:order-2">
          <LottiePlaceholder 
            src={workingAnimation}
            fallbackText="Celebration Mascot Animation" 
            className="rounded-[3rem] border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-brand-yellow/30"
          />
        </div>
      </div>
    </section>
  );
}
