// IMAGES POUR LA SECTION >HOME<
import Leaf1 from "./img/home-leaf-1.png";
import Leaf2 from "./img/home-leaf-2.png";
import Pepperoni from "./img/home-pepperoni.png";
import Mushroom from "./img/home-mushroom.png";
import Olive from "./img/home-olive.png";
import Tomate from "./img/home-tomato.png";

export const ingredientsHome = [
    { 
        src: Leaf1, 
        alt: "image d'une feuille vert 1", 
        className: "home__ingredient home__leaf-1" 
    },
    { 
        src: Leaf2, 
        alt: "image d'une feuille vert 2", 
        className: "home__ingredient home__leaf-2" 
    },
    { 
        src: Pepperoni, 
        alt: "image d'une tranche de pepperoni", 
        className: "home__ingredient home__pepperoni" 
    },
    { 
        src: Mushroom, 
        alt: "image d'une champignon", 
        className: "home__ingredient home__mushroom" 
    },
    { 
        src: Olive, 
        alt: "image d'une olive", 
        className: "home__ingredient home__olive" 
    },
    { 
        src: Tomate, 
        alt: "image d'une tomate", 
        className: "home__ingredient home__tomato" 
    },
];

// IMAGES POUR LA SECTION >RECIPE<
import RecipeFlour from "./img/recipe-flour.png";
import RecipeCheese from "./img/recipe-cheese.png";
import RecipeSauce from "./img/recipe-sauces.png";
import RecipeTomato from "./img/recipe-tomato.png";
import RecipeMeat from "./img/recipe-meat.png";

export const ingredientsRecipe = [
    {
        src: RecipeFlour,
        alt: "image d'un bol de farine",
        name: "Farine",
        description: "Le meilleur blé du champ pour la meilleure farine.",
    },
    {
        src: RecipeCheese,
        alt: "image d'un morceau de fromage",
        name: "Fromage",
        description: "Le fromage est la clé d'un avenir sain.",
    },
    {
        src: RecipeSauce,
        alt: "image d'un bol de sauce tomate",
        name: "Sauce",
        description: "Ajoutez une touche de salsa à votre vie et elle n'en sera que meilleure.",
    },
    {
        src: RecipeTomato,
        alt: "image de deux tomates",
        name: "Légumes",
        description: "Des légumes pleins de l'essence de la nature et biologiques.",
    },
    {
        src: RecipeMeat,
        alt: "image de plusieurs tranches de pepperoni",
        name: "Viandes",
        description: "Les meilleures viandes fraîches pour votre santé.",
    },
];
