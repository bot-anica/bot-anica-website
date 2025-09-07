"use client";

import { FC } from "react";
import { useToast } from "@/context/ToastContext";
import { Github, Send, Mail } from "lucide-react";

const FooterContacts: FC = () => {
  const { showToast } = useToast();

  const handleMailClick = () => {    
    const email = "bot.anica.course@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email скопирован в буфер обмена");
    }).catch(err => {
      console.error("Ошибка при копировании email: ", err);
      showToast("Не удалось скопировать email", 3000);
    });
  };

  
  return (
    <div className="flex flex-row gap-5 mb-4 md:mb-0">
      <a
        href="https://github.com/bot-anica"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="GitHub"
      >
        <Github size={26} />
      </a>
      <a
        href="https://t.me/callback_messanger_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Telegram"
      >
        <Send size={26} />
      </a>
      <a
        href="mailto:bot.anica.course@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Email"
        onClick={handleMailClick}
      >
        <Mail size={26} />
      </a>
    </div>
  );
};

export default FooterContacts;
