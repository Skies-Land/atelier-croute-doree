// MEDIAS
import Popular1 from "../../../../medias/img/popular-1.png";
import Popular2 from "../../../../medias/img/popular-2.png";
import Popular3 from "../../../../medias/img/popular-3.png";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Image } from "../../../elements/image/image";

export const PopularSlides = [
    { 
        src: Popular1, 
        alt: "image d'une pizza margherita", 
        title: "Pizza margherita" 
    },
    { 
        src: Popular2, 
        alt: "image d'une pizza aux champignons", 
        title: "Pizza aux champignons" 
    },
    { 
        src: Popular3, 
        alt: "image d'une pizza pepperoni", 
        title: "Pizza pepperoni" 
    },
]

export const PopularSlider = () => {
    return (
        <>
            <Swiper
                loop={true} // Active le défilement infini
                grabCursor={true} // Change le curseur en mode pointer
                slidesPerView="auto" // Nombre de slides visibles ajusté automatiquement
                centeredSlides={true} // Centre les slides
                spaceBetween={50} // Espacement entre les slides (ajustez si nécessaire)
                pagination={{ clickable: true }} // Pagination cliquable
            >
                {PopularSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="popular__card">
                        <Image src={slide.src} alt={slide.alt} className="popular__img" />
                        <h3 className="popular__title">{slide.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}