// COMPONENTS
import { HomeData } from "./modules/HomeData";
import { HomeImages } from "./modules/HomeImages";

export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <HomeData />
                <HomeImages />
            </div>
        </section>
    )
}