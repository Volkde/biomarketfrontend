import { Image } from "../Image";
import { StyledImages } from "./styles";
import { ImagesProps } from "./types";

function Images({ images = [] }: ImagesProps) {
  if (!images.length) {
    images.push({ id: 0, url: "https://via.placeholder.com/400" });
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
