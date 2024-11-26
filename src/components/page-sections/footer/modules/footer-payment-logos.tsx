// DATA
import { PaymentLogos } from "../modules/footer-data";

// COMPONENT
import { Image } from "../../../elements/image/image";

export const FooterPaymentLogos = () => {
    return (
        <div className="footer__pay">
            {PaymentLogos.map((logo, index) => (
                <Image 
                    key={index} 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="footer__pay-img"
                />
            ))}
        </div>
    );
};