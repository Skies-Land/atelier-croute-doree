// COMPONENT
import { RiMessengerFill, RiTelegramFill, RiWhatsappFill } from "react-icons/ri";

export const ContactSocialLinks = [
    { 
        href: "https://www.whatsapp.com/?lang=fr_FR", 
        ariaLabel: "Lien vers l'application Whatsapp", 
        icon: <RiWhatsappFill /> 
    },
    { 
        href: "https://www.messenger.com/?locale=fr_FR", 
        ariaLabel: "Lien vers l'application messenger", 
        icon: <RiMessengerFill /> 
    },
    { 
        href: "https://telegram.org/", 
        ariaLabel: "Lien vers l'application telegram", 
        icon: <RiTelegramFill /> 
    }
];