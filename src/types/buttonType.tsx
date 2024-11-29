export interface ButtonProps {
    to?: string; // to = href
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
