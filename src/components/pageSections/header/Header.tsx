// DEPENDENCIES
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// IMAGE
import logoPizza from "../../../medias/svg/logo-pizza.svg";

// FEATURES
import { ActiveLink } from "../../features/active-link/ActiveLink";

// ICONS
import { RiApps2AddFill, RiCloseLine } from "react-icons/ri";

export const Header = () => {

    const navMenuRef = useRef<HTMLDivElement>(null);
    const navToggleRef = useRef<HTMLDivElement>(null);
    const navCloseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const navMenu = navMenuRef.current;
        const navToggle = navToggleRef.current;
        const navClose = navCloseRef.current;

        // Affichage du menu
        const showMenu = () => {
            if (navMenu) {
                navMenu.classList.add('show-menu');
            }
        };

        // Masquage de menu
        const hideMenu = () => {
            if (navMenu) {
                navMenu.classList.remove('show-menu');
            }
        };

        // Fermeture du menu lors du clic sur un lien
        const navLinks = navMenu?.querySelectorAll('.nav__link');
        navLinks?.forEach(link => {
            link.addEventListener('click', hideMenu);
        });

        if (navToggle) {
            navToggle.addEventListener('click', showMenu);
        }

        if (navClose) {
            navClose.addEventListener('click', hideMenu);
        }

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', showMenu);
            }
            if (navClose) {
                navClose.removeEventListener('click', hideMenu);
            }
            navLinks?.forEach(link => {
                link.removeEventListener('click', hideMenu);
            });
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav containner">
                <Link to="/#" aria-label="Logo du site" className="nav__logo">
                    <img src={logoPizza} alt="logo du site" />
                    Atelier Croûte Dorée
                </Link>

                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
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

                    {/* Close button */}
                    <div className="nav__close" id="nav-close" ref={navCloseRef}>
                        <RiCloseLine />
                    </div>
                </div>

                {/* Toggle button */}
                <div className="nav__toggle" id="nav-toggle" ref={navToggleRef}>
                    <RiApps2AddFill />
                </div>
            </nav>
        </header>
    );
};