export interface Image {
  id?: string | number;
  url: string;
}

export interface Product {
  name?: string;
  image?: string;
}

export interface DetailedImagesProps {
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
  isDetailed?: never; // Explicitly removed for this component
}
