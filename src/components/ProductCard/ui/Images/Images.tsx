import { Image } from "../Image";
import { ImagesProps } from "./types";

function Images({ images = [] }: ImagesProps) {
  if (!images.length) {
    images.push({ id: 0, url: "https://via.placeholder.com/400" });
  }

  const elImages = images.map(({ id, url, alt }) => (
    <Image key={id} url={url} alt={alt} />
  ));

  return <div>{images?.length > 1 && <div>{elImages}</div>}</div>;
}

export default Images;
