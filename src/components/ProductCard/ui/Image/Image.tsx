import { ImageProps } from "./types";

function Image({ id, url, alt }: ImageProps) {
  return <img key={id} src={url} alt={alt || "Thumbnail"} />;
}

export default Image;
