import { StyledImage } from "./styles";
import { ImageProps } from "./types";

function Image({ id, url, alt }: ImageProps) {
  return <StyledImage key={id} src={url} alt={alt || "Thumbnail"} />;
}

export default Image;
