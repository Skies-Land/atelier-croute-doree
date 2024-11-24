// DEPENDENCIES
import { Link } from "react-router-dom";

// TYPE
import { ButtonProps } from "../../../types/ButtonType";

export const Button = ({ to, children }: ButtonProps) => {
    return (
        <Link to={to} className="button">
            {children}
        </Link>
    );
};