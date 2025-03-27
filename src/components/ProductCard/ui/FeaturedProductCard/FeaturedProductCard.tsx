import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ProductCardProps } from "../Root";

const StyledFeaturedContent = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  z-index: 1;
`;

const StyledFeaturedTitle = styled(Typography)`
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StyledFeaturedDescription = styled(Typography)`
  color: #666;
  font-size: 0.875rem;
`;

const FeaturedProductCard = ({ product }: ProductCardProps) => {
  return (
    <StyledFeaturedContent>
      <StyledFeaturedTitle variant="h6">
        {product.featuredTitle || "Featured Product"}
      </StyledFeaturedTitle>
      {product.featuredDescription && (
        <StyledFeaturedDescription variant="body2">
          {product.featuredDescription}
        </StyledFeaturedDescription>
      )}
    </StyledFeaturedContent>
  );
};

export default FeaturedProductCard;
