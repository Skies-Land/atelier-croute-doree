export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager"; // Contrôle du chargement, par défaut "lazy"
}
