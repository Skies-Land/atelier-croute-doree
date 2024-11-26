// MEDIAS
import footerCard1 from "../../../../medias/img/footer-card-1.png";
import footerCard2 from "../../../../medias/img/footer-card-2.png";
import footerCard3 from "../../../../medias/img/footer-card-3.png";
import footerCard4 from "../../../../medias/img/footer-card-4.png";

// COMPONENT
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

// DEPENDENCIES
import { ReactNode } from "react";

// TYPES
export interface SocialLink {
    href: string;
    ariaLabel: string;
    icon: ReactNode;
}
export interface PaymentLogo {
    src: string;
    alt: string;
}

export const SocialLinks: SocialLink[] = [
    {
        href: "https://www.facebook.com/",
        ariaLabel: "Visitez notre page Facebook",
        icon: <RiFacebookCircleFill />,
    },
    {
        href: "https://www.instagram.com",
        ariaLabel: "Visitez notre page Instagram",
        icon: <RiInstagramFill />,
    },
    {
        href: "https://twitter.com/",
        ariaLabel: "Visitez notre page Twitter",
        icon: <RiTwitterXFill />,
    },
];

export const PaymentLogos: PaymentLogo[] = [
    { 
        src: footerCard1, 
        alt: "logo VISA" 
    },
    { 
        src: footerCard2, 
        alt: "logo Mastercard" 
    },
    { 
        src: footerCard3, 
        alt: "logo Paypal" 
    },
    { 
        src: footerCard4, 
        alt: "logo Discover" 
    },
];
