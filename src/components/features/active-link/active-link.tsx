// DEPENDENCIES
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

// TYPES
import { ActiveLinkProps } from "../../../types/ActiveLinkType";

// Gère l'état "actif" des liens de navigation en fonction de la route ou de la section visible.
export const ActiveLink = ({ to, children }: ActiveLinkProps) => {
    const routeHref = useLocation(); // Permet de connaître la route active
    const [activeSection, setActiveSection] = useState<string | null>(null); // État de la section visible

    // Détermine si le lien est actif en fonction de la route actuelle
    const isActive: boolean = useMemo(() => {
        return routeHref.pathname === to;
    }, [routeHref.pathname, to]);

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');

        // Met à jour la section active en fonction du défilement
        const scrollActive = () => {
            const scrollY = window.scrollY;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight; // Hauteur de la section
                const sectionTop = current.offsetTop - 58; // Position supérieure ajustée
                const sectionId = current.getAttribute('id'); // ID de la section

                // Vérifie si la section est visible dans la fenêtre actuelle
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId); // Met à jour la section active
                }
            });
        };

        // Ajoute un écouteur d'événement au défilement
        window.addEventListener('scroll', scrollActive);

        // Nettoie l'écouteur d'événement au démontage
        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    // Détermine si la section est active
    const isSectionActive = useMemo(() => {
        return activeSection && to.includes(activeSection);
    }, [activeSection, to]);

    return (
        <Link
            to={to}
            className={`nav__link ${isActive || isSectionActive ? 'active-link' : ''}`}
        >
            {children}
        </Link>
    );
};
