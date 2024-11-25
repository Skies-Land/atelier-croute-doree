// FEATURE
import { ActiveLink } from "../../../features/active-link/ActiveLink"

export const NavList = () => {
    return (
        <>
            <ul className="nav__list">
                <li>
                    <ActiveLink to="/#home" aria-label="Accueil" className="nav__link active-link">Accueil</ActiveLink>
                </li>

                <li>
                    <ActiveLink to="/#about" aria-label="À propos" className="nav__link">À propos</ActiveLink>
                </li>

                <li>
                    <ActiveLink to="/#popular" aria-label="Populaires" className="nav__link">Populaires</ActiveLink>
                </li>

                <li>
                    <ActiveLink to="/#products" aria-label="Produits" className="nav__link">Produits</ActiveLink>
                </li>

                <li>
                    <ActiveLink to="/#contact" aria-label="Contact" className="nav__link">Contact</ActiveLink>
                </li>
            </ul>
        </>
    )
}