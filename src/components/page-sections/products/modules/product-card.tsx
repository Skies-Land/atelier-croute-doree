// COMPONENTS
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Image } from "../../../elements/image/image";

// TYPES
import { ProductCardProps } from "../../../../types/productCardType";


export const ProductCard = ({ name, price, img, alt }: ProductCardProps) => {
    return (
        <article className="products__card">
            <Image src={img} alt={alt} className="products__img" />

            <h3 className="products__name">{name}</h3>
            <span className="products__price">{price} €</span>

            <button className="products__button" aria-label={`Ajouter ${name} au panier`}>
                <RiShoppingBag3Fill />
            </button>

        </article>
    );
};