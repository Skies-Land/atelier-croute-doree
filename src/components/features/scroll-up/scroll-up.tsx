// DEPENDANCIES
import { useEffect, useState } from "react";

// COMPONENT
import { RiArrowUpSLine } from "react-icons/ri";

export const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY >= 350) {
        setShowScroll(true);
        } else if (showScroll && window.scrollY < 350) {
        setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
        window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <a 
            href="#" 
            className={`scrollup ${showScroll ? 'show-scroll' : ''}`} 
            id="scroll-up" 
            aria-label="Retour en haut du site"
        >
            <RiArrowUpSLine />
        </a>
    );
};