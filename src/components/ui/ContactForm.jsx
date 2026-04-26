import { Button } from "./Button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [messageState, setMessage] = useState({ type: '', text: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Send email to admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        {
          to_email: 'tm.zendo@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      // Send confirmation email to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
        {
          to_email: formData.email,
          user_name: formData.name,
          user_message: formData.message,
        }
      );

      setMessage({ 
        type: 'success', 
        text: 'Thank you! Your message has been sent successfully. Check your email for confirmation.' 
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Failed to send message. Please check your email address and try again.' 
      });
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="gsap-slide-up bg-brand-white p-8 md:p-12 rounded-[3rem] border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6"
    >
      {messageState.text && (
        <div className={`p-4 rounded-2xl border-2 ${
          messageState.type === 'success' 
            ? 'bg-green-50 border-green-500 text-green-800' 
            : 'bg-red-50 border-red-500 text-red-800'
        }`}>
          <p className="font-semibold">{messageState.text}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-lg font-bold ml-2 uppercase tracking-wide">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-6 py-4 rounded-full border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-bold ml-2 uppercase tracking-wide">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-6 py-4 rounded-full border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-lg font-bold ml-2 uppercase tracking-wide">Message</label>
        <textarea 
          id="message" 
          rows="4"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-6 py-4 rounded-[2rem] border-4 border-brand-black bg-brand-white text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-shadow placeholder:text-brand-black/30 resize-none disabled:opacity-50"
        ></textarea>
      </div>

      <div className="pt-4 flex justify-end">
        <Button 
          type="submit" 
          className="w-full md:w-auto"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
