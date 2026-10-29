import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/site';

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition hover:scale-105 sm:bottom-6 sm:right-6"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
