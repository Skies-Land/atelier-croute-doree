// MEDIA
import RecipeImg from "../../../medias/img/recipe-img.png";

// COMPONENT
import { Image } from "../../elements/image/image";
import { RecipeData } from "./modules/recipe-data";

export const RecipeView = () => {
    return (
        <section className="recipe section">
            <h2 className="section__title">
                Ingrédients frais <br /> et naturels
            </h2>
            <div className="recipe__container container grid">
                <RecipeData />
                <Image src={RecipeImg} alt="image d'une pizza" className="recipe__img" />
            </div>
        </section>
    );
};