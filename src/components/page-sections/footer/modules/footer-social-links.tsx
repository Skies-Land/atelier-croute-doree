// DATA
import { SocialLinks } from "../modules/footer-data";

export const FooterSocialLinks = () => {
    return (
        <div className="footer__social">
            {SocialLinks.map((link, index) => (
                <a 
                    key={index} 
                    href={link.href} 
                    aria-label={link.ariaLabel} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer__social-link"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};