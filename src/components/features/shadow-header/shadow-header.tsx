// DEPENDANCIES
import { useEffect, useState } from 'react';

// TYPES
import { ShadowHeaderProps } from '../../../types/shadowHeaderType';

export const ShadowHeader = ({ children }:  ShadowHeaderProps ) => {
    const [shadowHeader, setShadowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShadowHeader(window.scrollY >= 50);
        };

        // Ajoute un écouteur d'événement pour le défilement
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur pour éviter les fuites de mémoire
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`header ${shadowHeader ? 'shadow-header' : ''}`} id="header"
        >
            {children}
        </header>
    );
};