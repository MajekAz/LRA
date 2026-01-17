
import React, { useState, useEffect } from 'react';

const WhatsAppChat: React.FC = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  // Phone format for wa.me: Numbers only, no '+' or spaces. 
  // User provided: +46 76 316 24 23 -> 46763162423
  const phoneNumber = "46763162423"; 
  const message = "Hello, I'd like to make an enquiry.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    // Show greeting after 3 seconds to capture attention
    const timer = setTimeout(() => setShowGreeting(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[90] flex flex-col items-end group">
      {/* Greeting Bubble */}
      {showGreeting && (
        <div className="mb-4 mr-2 max-w-[240px] bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-reveal relative">
          <button 
            onClick={() => setShowGreeting(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-brand-dark text-white rounded-full flex items-center justify-center text-[10px] hover:bg-brand-gold transition-colors"
          >
            ✕
          </button>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Principal Advisory</p>
            <p className="text-sm font-medium text-brand-dark leading-tight">
              Direct line to our strategy team. How can we assist today?
            </p>
          </div>
          {/* Triangle pointer */}
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}

      {/* Main Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-110 hover:-rotate-6 transition-all duration-500 group active:scale-95 overflow-hidden"
      >
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <svg 
          className="w-8 h-8 text-white fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </a>
    </div>
  );
};

export default WhatsAppChat;
