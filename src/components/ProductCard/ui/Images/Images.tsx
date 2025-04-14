import { Image } from "../Image";
import { StyledImages } from "./styles";
import { ImagesProps } from "./types";

/**
 * Product images container component
 * @param {ImagesProps} props - Component props
 * @param {Array<{id: number, url: string, alt?: string}>} props.images - Array of image objects
 */
function Images({ images = [] }: ImagesProps) {
  if (!images.length) {
    images.push({ id: 0, url: "/images/no-image.jpg" });
  }

  const elImages = images.map(({ id, url, alt }) => (
    <Image key={id} url={url} alt={alt} />
  ));

  return (
    <StyledImages className="product-images">
      {images.length > 0 && elImages}
    </StyledImages>
  );
}

export default Images;
