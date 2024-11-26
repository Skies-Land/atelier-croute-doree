// COMPONENTS
import { FooterSocialLinks } from "./modules/footer-social-links";
import { FooterPaymentLogos } from "./modules/footer-payment-logos";
import { FooterSubscription } from "./modules/footer-subscription";

export const FooterView = () => {

    const curentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <a href="/#" aria-label="Logo du site" className="footer__logo">Atelier Croûte Dorée</a>

                <div className="footer__content grid">
                    <div>
                        <h3 className="footer__title">Social</h3>
                        <FooterSocialLinks />
                    </div>

                    <div>
                        <h3 className="footer__title">Méthode de paiement</h3>
                        <FooterPaymentLogos />
                    </div>

                    <div>
                        <h3 className="footer__title">S'abonner pour obtenir <br/> des réductions</h3>
                        <FooterSubscription />
                    </div>
                </div>
            </div>

            <div className="footer__policy">
                <a href="#" aria-label="Consultez nos conditions et accords" className="footer__link">Conditions et accords</a>
                {" | "}
                <a href="#" aria-label="Consultez notre politique de confidentialit" className="footer__link">Politique de confidentialité</a>
            </div>

            <span className="footer__copy">
                &#169; Tous droits réservés par <br /> Atelier Croûte Dorée - {curentYear} 
                <br /> 
                <a 
                    href="https://github.com/Skies-Land" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer__copy-link"
                >
                    Jonathan Araldi
                </a>
            </span>
        </footer>
    );
};