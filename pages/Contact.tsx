
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICONS } from '../constants.tsx';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const validateForm = (data: FormData): boolean => {
    const newErrors: FormErrors = {};
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    if (!name || name.length < 2) newErrors.name = "Full name is required for principal review.";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "A valid corporate email is required.";
    if (!message || message.length < 10) newErrors.message = "Please provide more context regarding your challenge.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiError(null);
    const formData = new FormData(e.currentTarget);

    // 1. Honeypot check
    if (formData.get('_hp')) {
      console.warn("Spam detected.");
      return;
    }

    // 2. Validation
    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://lraconsulting.net/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setToastVisible(true);
        setTimeout(() => navigate('/success-contact'), 2000);
      } else {
        throw new Error('Server returned an error state.');
      }
    } catch (error) {
      setApiError('Unable to submit dossier. Please verify connectivity or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { title: 'Global Inquiries', info: 'info@lraconsulting.net', icon: ICONS.mail, sub: 'Replies within 24 hours' },
    { title: 'Direct Line', info: '+46 (0) 317 880 351', icon: ICONS.phone, sub: 'Mon-Fri, 9am - 5pm CET' },
    { title: 'Operational Hub', info: 'Odinsgatan 13, Gothenburg', icon: ICONS.mapPin, sub: 'SE-411 03, Sweden' },
    { title: 'Office Hours', info: '08:00 - 18:00', icon: ICONS.activity, sub: 'Central European Time' }
  ];

  return (
    <div className="pt-20 flex flex-col bg-brand-light relative">
      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] animate-reveal">
          <div className="bg-brand-dark text-white px-8 py-4 rounded-2xl shadow-2xl border border-brand-gold flex items-center gap-3">
            <span className="text-brand-gold">✓</span>
            <span className="text-sm font-black uppercase tracking-widest">Message successfully sent!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Corporate perspective" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8 animate-reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-brand-gold font-black text-[10px] uppercase tracking-ultra">Engagement Portal</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white leading-[0.85] tracking-tighter">
            Initiate <br/>
            <span className="text-brand-gold italic">Strategic Action.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-normal leading-relaxed opacity-80 text-balance">
            Connect with our principals to discuss your specific organizational challenges and discover the values that differentiate.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-4 hover:translate-y-[-5px] transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-black uppercase tracking-ultra text-gray-400">{item.title}</h4>
                  <div className="text-lg font-serif font-bold text-brand-dark">{item.info}</div>
                  <p className="text-xs text-gray-400 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-light rounded-[4rem] p-10 md:p-16 shadow-sm border border-gray-100">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-brand-gold font-black text-[11px] uppercase tracking-ultra">Inquiry Protocol</h2>
              <h3 className="text-5xl font-serif font-normal text-brand-dark tracking-tight leading-tight">Secure <span className="italic">Principal Briefing.</span></h3>
              <p className="text-gray-500 max-w-xl mx-auto">Please provide the details of your strategic interest. Our triage team ensures inquiries are routed to the most relevant managing principal.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
              {/* Spam Honeypot - Hidden from users */}
              <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Full Name</label>
                <input name="name" type="text" className={`w-full p-5 bg-white border-2 outline-none transition-all rounded-[2rem] font-medium shadow-sm ${errors.name ? 'border-red-400' : 'border-transparent focus:border-brand-blue'}`} placeholder="John Doe" />
                {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase ml-4 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Work Email</label>
                <input name="email" type="email" className={`w-full p-5 bg-white border-2 outline-none transition-all rounded-[2rem] font-medium shadow-sm ${errors.email ? 'border-red-400' : 'border-transparent focus:border-brand-blue'}`} placeholder="john@company.com" />
                {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase ml-4 mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Phone Number</label>
                <input name="phone" required type="tel" className="w-full p-5 bg-white border-2 border-transparent focus:border-brand-blue outline-none transition-all rounded-[2rem] font-medium shadow-sm" placeholder="+46 00 000 00 00" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Company Name</label>
                <input name="company" required type="text" className="w-full p-5 bg-white border-2 border-transparent focus:border-brand-blue outline-none transition-all rounded-[2rem] font-medium shadow-sm" placeholder="Enterprise Ltd." />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Primary Strategic Interest</label>
                <div className="relative">
                  <select name="interest" className="w-full p-5 bg-white border-2 border-transparent focus:border-brand-blue outline-none transition-all rounded-[2rem] appearance-none font-medium text-brand-dark shadow-sm">
                    <option>Organizational Architecture & Growth</option>
                    <option>International Tax & Legal Compliance</option>
                    <option>Market Mapping & Intelligence</option>
                    <option>Ethical Lobbying & Policy Advocacy</option>
                    <option>Global Logistics & Setup</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                    {ICONS.chevronRight}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-ultra ml-4">Challenge Summary</label>
                <textarea name="message" rows={5} className={`w-full p-6 bg-white border-2 outline-none transition-all rounded-[2.5rem] resize-none font-medium shadow-sm ${errors.message ? 'border-red-400' : 'border-transparent focus:border-brand-blue'}`} placeholder="Briefly describe the structural or market challenges you are facing..."></textarea>
                {errors.message && <p className="text-[10px] text-red-500 font-bold uppercase ml-4 mt-1">{errors.message}</p>}
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className={`w-full py-6 text-brand-dark font-black rounded-[2rem] transition-all shadow-2xl text-[14px] uppercase tracking-ultra flex items-center justify-center space-x-4 active:scale-95 ${isSubmitting ? 'bg-gray-200 cursor-not-allowed' : 'bg-brand-gold hover:bg-brand-dark hover:text-white'}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting Dossier...
                    </>
                  ) : 'Request Principal Briefing'}
                </button>
                {apiError && (
                  <p className="mt-4 text-center text-red-500 font-bold text-[10px] uppercase tracking-ultra">{apiError}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-brand-light h-[450px] relative grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.4283592164414!2d11.976527216035227!3d57.7088709811162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3666f7f2b69%3A0xc3f837651a1e4a2d!2sOdinsgatan%2013%2C%20411%2003%20G%C3%B6teborg%2C%20Sweden!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="LRA Consulting Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
