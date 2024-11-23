// SECTION PAGE
import { About } from "../components/pageSections/about/About"
import { Contact } from "../components/pageSections/contact/Contact"
import { Footer } from "../components/pageSections/footer/Footer"
import { Header } from "../components/pageSections/header/Header"
import { Home } from "../components/pageSections/home/Home"
import { Popular } from "../components/pageSections/popular/Popular"
import { Products } from "../components/pageSections/products/Products"
import { Recipe } from "../components/pageSections/recipe/Recipe"

export const HomePage = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Popular />
            <Recipe />
            <Products />
            <Contact />
            <Footer />
        </>
    )
}