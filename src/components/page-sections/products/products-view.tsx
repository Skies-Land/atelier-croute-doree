// DATA
import { ProductsData } from "./modules/products-data";

// COMPONENT
import { ProductCard } from "./modules/product-card";

export const ProductsView = () => {
    return (
        <section className="products section" id="products">

            <h2 className="section__title">Les pizzas les plus <br /> dévorées</h2>

            <div className="products__container container grid">
                {ProductsData.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        alt={product.alt}
                    />
                ))}
            </div>

        </section>
    );
};