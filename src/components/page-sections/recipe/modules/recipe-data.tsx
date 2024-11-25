// DATA
import { ingredientsRecipe } from "../../../../medias/ingredients";

// COMPONENT
import { Image } from "../../../elements/image/image";

export const RecipeData = () => {
    return (
        <div className="recipe__list grid">
            {ingredientsRecipe.map((ingredient, index) => (
                <div className="recipe__ingredient" key={index}>
                    <Image src={ingredient.src} alt={ingredient.alt} className="recipe__image" />
                    <div>
                        <h3 className="recipe__name">{ingredient.name}</h3>
                        <p className="recipe__description">{ingredient.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};