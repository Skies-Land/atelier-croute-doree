// DEPENDENCIES
import { Link } from "react-router-dom";

// IMAGE
import logoPizza from "../../../medias/svg/logo-pizza.svg";

// ICONS
import { RiApps2AddFill, RiCloseLine } from "react-icons/ri";

// COMPONENT
import { Image } from "../../elements/image/Image";
import { NavList } from "./modules/NavList";

// HOOK
import { useMenuToggle } from "../../../hook/useMenuToggle";

export const Header = () => {
    // Hook pour gérer l'ouverture, la fermeture et la navigation du menu.
    const { navMenuRef, navToggleRef, navCloseRef } = useMenuToggle();

    return (
        <header className="header" id="header">
            <nav className="nav containner">
                <Link to="/#" aria-label="Logo du site" className="nav__logo">
                    <Image src={logoPizza} alt="logo du site" />
                    Atelier Croûte Dorée
                </Link>

                {/* Menu de navigation */}
                <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
                    <NavList />

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