import { useEffect, useRef } from "react";

// Hook personnalisé pour gérer l'ouverture, la fermeture et la navigation du menu.
export const useMenuToggle = () => {
    const navMenuRef = useRef<HTMLDivElement>(null); // Menu de navigation principal
    const navToggleRef = useRef<HTMLDivElement>(null); // Bouton pour ouvrir le menu
    const navCloseRef = useRef<HTMLDivElement>(null); // Bouton pour fermer le menu

    useEffect(() => {
        const navMenu = navMenuRef.current; // Élément DOM correspondant au menu
        const navToggle = navToggleRef.current; // Élément DOM du bouton d'ouverture
        const navClose = navCloseRef.current; // Élément DOM du bouton de fermeture

        // Affichage du menu
        const showMenu = () => navMenu?.classList.add('show-menu');

        // Masquage de menu
        const hideMenu = () => navMenu?.classList.remove('show-menu');

        // Gestion des clics sur les liens pour fermer le menu après navigation
        const navLinks = navMenu?.querySelectorAll('.nav__link'); // Sélectionne tous les liens du menu
        navLinks?.forEach(link => {
            link.addEventListener('click', hideMenu); // Ajoute un événement 'click' à chaque lien
        });

        navToggle?.addEventListener('click', showMenu); // Clic sur le bouton d'ouverture
        navClose?.addEventListener('click', hideMenu); // Clic sur le bouton de fermeture

        return () => {
            navToggle?.removeEventListener('click', showMenu);
            navClose?.removeEventListener('click', hideMenu);
            navLinks?.forEach(link => {
                link.removeEventListener('click', hideMenu);
            });
        };
    }, []);

    return { navMenuRef, navToggleRef, navCloseRef };
};
