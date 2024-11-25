// COMPONENTS
import { Button } from "../../../elements/button/button";
import { Image } from "../../../elements/image/image";

// MEDIAS
import stickerCheese from "../../../../medias/svg/sticker-cheese.svg";

export const AboutData = () => {
    return (
        <div className="about__data">
            <h2 className="section__title">En savoir plus sur <br /> Notre histoire</h2>

            <p className="about__description">
                Le secret de la réussite réside dans les meilleurs ingrédients 
                pour faire une meilleure pizza. Aujourd'hui, nous visons la 
                la perfection, tout comme nous le faisons depuis 15 ans 
                lorsque nous avons ouvert notre première pizzeria à Paris, France.
            </p>

            <Button to="#popular" aria-label="Les meilleures pizzas" className="button">
                Les meilleures pizzas
            </Button>

            <Image src={stickerCheese} alt="image d'un morceau de fromage" className="about__sticker" />
        </div>
    )
}