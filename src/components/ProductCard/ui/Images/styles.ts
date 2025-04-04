export const styles = {
  productImages: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px"
  },
  mainImage: {
    width: "100%"
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "8px",
    objectFit: "cover" as const
  },
  thumbnails: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap" as const
  },
  thumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover" as const,
    borderRadius: "4px",
    cursor: "pointer",
    border: "2px solid transparent"
  },
  selectedThumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover" as const,
    borderRadius: "4px",
    cursor: "pointer",
    border: "2px solid rgb(118, 150, 62)"
  }
};
