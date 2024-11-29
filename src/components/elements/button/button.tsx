// DEPENDENCIES
import { Link } from "react-router-dom";

// TYPE
import { ButtonProps } from "../../../types/buttonType";

export const Button = ({ 
    to, 
    children, 
    className, 
    type = "button", 
    disabled, onClick 
}: ButtonProps) => {
    // Si la propriété 'to' est définie et commence par '#', rendre un élément <a> 
    if (to && to.startsWith("#")) {
        return (
            <a 
                href={to} 
                className={`button ${className}`} 
                onClick={onClick}
            >
                {children}
            </a>
        );
    };

    // Sinon, rendre un élément <Link> contenant un <button>
    return (
        <Link to={to || "#"} className={`button ${className}`} onClick={onClick}>
            <button 
                type={type} 
                disabled={disabled}
            >
                {children}
            </button>
        </Link>
    );
};
