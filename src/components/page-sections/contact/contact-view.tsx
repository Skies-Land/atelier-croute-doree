// COMPONENTS
import { Image } from "../../elements/image/image"
import { RiMapPinFill } from "react-icons/ri";

// MEDIAS
import ContactImg from "../../../medias/img/contact-img.png";

// DATA
import { ContactStickers } from "./modules/contact-stickers";
import { ContactSocialLinks } from "./modules/contact-social-links";

export const ContactView = () => {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h2 className="section__title">Contactez-nous</h2>
                    <div className="contact__info grid">

                        <div>
                            <h3 className="contact__title">Ecrivez-nous</h3>
                            <div className="contact__social">
                                {ContactSocialLinks.map((link, index) => (
                                    <a 
                                        key={index} 
                                        href={link.href} 
                                        aria-label={link.ariaLabel} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact__social-link"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="contact__title">Livraison</h3>
                            <address className="contact__address">
                                05 12 34 56 78 <br />
                                atelier croûte dorée
                            </address>
                        </div>

                        <div>
                            <h3 className="contact__title">Localisation</h3>
                            <address className="contact__address">
                                123 rue de Paris, <br />
                                75000 Paris, France
                            </address>

                            <a href="https://maps.app.goo.gl/yCRXMqcuzazDq2aKA" target="_blank" className="contact__map">
                                <RiMapPinFill aria-hidden="true" />
                                <span>Voir sur la carte</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="contact__image">
                    <Image src={ContactImg} alt="image d'un livreur de pizza" className="contact__img" />
                </div>

                {ContactStickers.map((sticker, index) => (
                    <Image
                        key={index}
                        src={sticker.src}
                        alt={sticker.alt}
                        className={sticker.className}
                    />
                ))}
            </div>
        </section>
    );
};