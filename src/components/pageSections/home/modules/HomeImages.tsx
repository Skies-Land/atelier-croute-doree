// DATA
import { ingredientsHome } from "../../../../medias/Ingredients";

// COMPONENT
import { Image } from "../../../elements/image/Image";

// IMAGES
import Pizza from "../../../../medias/img/home-pizza.png";
import Board from "../../../../medias/img/home-board.png";

export const HomeImages = () => (
    <div className="home__images">
        <Image src={Pizza} alt="image d'une pizza" className="home__pizza" loading="eager"/>
        <Image src={Board} alt="image d'une planche en bois à pizza" className="home__board" loading="eager"/>

        {ingredientsHome.map((ingredientHome, index) => (
            <Image key={index} {...ingredientHome} />
        ))}
    </div>
);