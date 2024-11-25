// SECTION PAGE
import { AboutView } from "../components/pageSections/about/about-view"
import { ContactView } from "../components/pageSections/contact/contact-view"
import { FooterView } from "../components/pageSections/footer/footer-view"
import { HeaderView } from "../components/pageSections/header/header-view"
import { HomeView } from "../components/pageSections/home/home-view"
import { PopularView } from "../components/pageSections/popular/popular-view"
import { ProductsView } from "../components/pageSections/products/products-view"
import { RecipeView } from "../components/pageSections/recipe/recipe-view"

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