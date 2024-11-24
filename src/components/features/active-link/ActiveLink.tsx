// DEPENDENCIES
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

// TYPES
import { ActiveLinkProps } from "../../../types/ActiveLink";

export const ActiveLink = ({ to, children }: ActiveLinkProps) => {
    const routeHref = useLocation();

    const isActive: boolean = useMemo(() => {
        return routeHref.pathname === to;
    }, [routeHref.pathname, to])

    return (
        <Link to={to} className={`nav__link ${isActive ? 'active-link' : ''}`} >
            {children}
        </Link>
    )
}