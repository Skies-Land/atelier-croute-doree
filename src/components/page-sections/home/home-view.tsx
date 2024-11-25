// COMPONENTS
import { HomeData } from "./modules/home-data";
import { HomeImages } from "./modules/home-images";

export const HomeView = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeData />
                <HomeImages />
            </div>
        </section>
    )
}