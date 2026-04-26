import { ContactForm } from "../ui/ContactForm";

export function ContactSection({ id }) {
  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center py-20 px-6 lg:px-20 bg-brand-yellow"
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

        <div className="gsap-slide-up">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
