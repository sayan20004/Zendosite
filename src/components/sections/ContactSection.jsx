import { Button } from "../ui/Button";

export function ContactSection({ id }) {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="gsap-slide-up text-5xl md:text-7xl lg:text-[6rem] leading-[1] uppercase">
            Let's Talk
          </h2>
          <p className="gsap-slide-up text-xl md:text-2xl font-medium text-brand-black/80 mt-6">
            Have questions or just want to say hi? Drop us a line.
          </p>
        </div>

        <form className="gsap-slide-up bg-brand-white p-8 md:p-12 rounded-[3rem] border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg font-bold ml-2 uppercase tracking-wide">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name"
              className="w-full px-6 py-4 rounded-full border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-bold ml-2 uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com"
              className="w-full px-6 py-4 rounded-full border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-bold ml-2 uppercase tracking-wide">Message</label>
            <textarea 
              id="message" 
              rows="4"
              placeholder="How can we help you?"
              className="w-full px-6 py-4 rounded-[2rem] border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30 resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
