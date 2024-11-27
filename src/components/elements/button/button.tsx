// DEPENDENCIES
import { Link } from "react-router-dom";

// TYPE
import { ButtonProps } from "../../../types/buttonType";

export const Button = ({ to, children }: ButtonProps) => {
    return (
        <Link to={to} className="button">
            {children}
        </Link>
    );
};
