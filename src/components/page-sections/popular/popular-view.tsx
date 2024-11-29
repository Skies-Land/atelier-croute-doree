// DATA
import { PopularData } from "./modules/popular-data";

// COMPONENTS
import { Image } from "../../elements/image/image";
import { PopularSlider } from "./modules/popular-slides";

// MEDIA
import PopularDish from "../../../medias/img/popular-dish.png";

export const PopularView = () => {
  return (
    <section className="popular section" id="popular">
      <div className="popular__container container grid">
        <PopularData />

        <div className="popular__swiper swiper">
          <Image src={PopularDish} alt="image d'une plateau en bois" className="popular__dish" />
          <PopularSlider />
        </div>

      </div>
    </section>
  );
};
