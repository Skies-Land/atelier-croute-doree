import { ImageProps } from "../../../types/imageType";

export const Image = ({ src, alt, className, loading = "lazy" }: ImageProps) => (
    <img src={src} alt={alt} className={className} loading={loading} />
);
