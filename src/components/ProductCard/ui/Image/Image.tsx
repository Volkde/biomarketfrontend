import { StyledImage } from "./styles";
import { ImageProps } from "./types";

function Image({ id, url, alt }: ImageProps) {
  return (
    <StyledImage
      key={id}
      src={url ?? "./no-image.jpg"}
      alt={alt || "Thumbnail"}
      onError={e => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "./no-image.jpg";
      }}
    />
  );
}

export default Image;
