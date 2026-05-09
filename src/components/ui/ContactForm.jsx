import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [messageState, setMessage] = useState({ type: '', text: '' });

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
      const response = await fetch('https://zendosite.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. Check your email for confirmation.'
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        const error = await response.json();
        setMessage({
          type: 'error',
          text: error.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Network error. Please make sure the server is running and try again.'
      });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-brand-black/5 flex flex-col gap-5"
    >
      {messageState.text && (
        <div className={`p-4 rounded-2xl border ${
          messageState.type === 'success'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <p className="font-semibold text-sm">{messageState.text}</p>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-bold ml-1 uppercase tracking-widest text-brand-black/50">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-5 py-3.5 rounded-xl border border-brand-black/10 bg-white/70 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black/30 transition-all placeholder:text-brand-black/25 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-bold ml-1 uppercase tracking-widest text-brand-black/50">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-5 py-3.5 rounded-xl border border-brand-black/10 bg-white/70 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black/30 transition-all placeholder:text-brand-black/25 disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-bold ml-1 uppercase tracking-widest text-brand-black/50">Message</label>
        <textarea
          id="message"
          rows="4"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full px-5 py-3.5 rounded-xl border border-brand-black/10 bg-white/70 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-black/20 focus:border-brand-black/30 transition-all placeholder:text-brand-black/25 resize-none disabled:opacity-50"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-brand-black text-brand-white font-semibold text-base rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-brand-white/30 border-t-brand-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
