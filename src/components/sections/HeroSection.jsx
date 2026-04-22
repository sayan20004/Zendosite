import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { LottiePlaceholder } from "../ui/LottiePlaceholder";

export function HeroSection({ id }) {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8 z-10">
          <Badge className="gsap-slide-up">Zendo App</Badge>
          
          <h1 className="gsap-slide-up text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] -tracking-[0.04em] uppercase">
            Work <br />
            With <br />
            Confidence
          </h1>
          
          <p className="gsap-slide-up text-xl md:text-2xl font-medium text-brand-black/80 max-w-md">
            The smart way to build better habits, track daily tasks, and actually enjoy getting things done.
          </p>
          
          <div className="gsap-slide-up pt-4">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* Visual Content */}
        <div className="gsap-fade-in w-full h-[400px] lg:h-[600px] relative">
          <LottiePlaceholder 
            fallbackText="Mascot Working Animation" 
            className="rounded-[3rem] border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </div>
    </section>
  );
}
