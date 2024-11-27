// SECTION PAGE
import { AboutView } from "../components/page-sections/about/about-view"
import { ContactView } from "../components/page-sections/contact/contact-view"
import { FooterView } from "../components/page-sections/footer/footer-view"
import { HeaderView } from "../components/page-sections/header/header-view"
import { HomeView } from "../components/page-sections/home/home-view"
import { PopularView } from "../components/page-sections/popular/popular-view"
import { ProductsView } from "../components/page-sections/products/products-view"
import { RecipeView } from "../components/page-sections/recipe/recipe-view"

export const HomePage = () => {
    return (
        <>
            <HeaderView />
            <HomeView />
            <AboutView />
            <PopularView />
            <RecipeView />
            <ProductsView />
            <ContactView />
            <FooterView />
        </>
    )
}
