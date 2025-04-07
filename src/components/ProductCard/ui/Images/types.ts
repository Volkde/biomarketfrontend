export interface Image {
  id: number | string;
  url: string;
}

export interface Product {
  name?: string;
  image?: string;
}

export interface ImagesProps {
  images?: Image[];
  product?: Product;
}

export interface MagnifierLensProps {
  magnifierSize: number;
  zoomLevel: number;
  position: { x: number; y: number };
  imageWidth: number;
  backgroundImage: string;
  borderColor: string;
}

export interface ContainerProps {
  isDetailed: boolean;
}