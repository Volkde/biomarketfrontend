import { StyledImage } from "./styles";
import { ImageProps } from "./types";

/**
 * Product image component with fallback handling
 * @param {ImageProps} props - Component props
 * @param {number} props.id - Unique image ID
 * @param {string} props.url - Image URL
 * @param {string} props.alt - Alternative text for the image
 */
function Image({ id, url, alt }: ImageProps) {
  return (
    <StyledImage
      key={id}
      src={url ?? "/images/no-image.jpg"}
      alt={alt || "Thumbnail"}
      onError={e => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/images/no-image.jpg";
      }}
    />
  );
}

export default Image;
