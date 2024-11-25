// COMPONENTS
import { Image } from "../../elements/image/Image";
import { AboutData } from "./modules/about-data";

// MEDIAS
import aboutImg from "../../../medias/img/about-img.png";

export const AboutView = () => {
    return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <AboutData />

                <Image src={aboutImg} alt="image d'une part de pizza sur une planche en bois" className="about__img" />
            </div>
        </section>
    );
}