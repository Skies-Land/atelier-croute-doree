// IMAGES
import stickerPizza from "../../../../medias/svg/sticker-pizza.svg";
import stickerLeaf from "../../../../medias/svg/sticker-leaf.svg";

// COMPONENTS
import { Button } from "../../../elements/button/button";
import { Image } from "../../../elements/image/image";

export const HomeData = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">
                Pizzas croustillantes <br /> et délicieuses
            </h1>

            <p className="home__description">
                Commandez les meilleures pizzas pour mettre fin à votre faim 
                et rendre vos moments en famille plus 
                mémorables, passez votre commande dès maintenant.
            </p>

            <Button to="#products">
                Commander maintenant
            </Button>

            <Image src={stickerPizza} alt="image d'une part de pizza" className="home__sticker-1"/>
            <Image src={stickerLeaf} alt="image d'une feuille" className="home__sticker-2"/>
        </div>
    );
};