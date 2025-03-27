import { Typography } from "@mui/material";
import {
  StyledDescription,
  StyledDescriptionText,
  StyledFeatureItem,
  StyledFeaturesList,
  StyledTitle,
} from "./styles";
import { DescriptionProps } from "./types";

const Description = ({
  title,
  description,
  features,
  size = "medium",
}: DescriptionProps) => {
  return (
    <StyledDescription>
      <StyledTitle>{title}</StyledTitle>
      {description && (
        <StyledDescriptionText>{description}</StyledDescriptionText>
      )}
      {features && features.length > 0 && (
        <StyledFeaturesList>
          {features.map((feature, index) => (
            <StyledFeatureItem key={index}>
              <Typography variant="body2">•</Typography>
              <Typography variant="body2">{feature}</Typography>
            </StyledFeatureItem>
          ))}
        </StyledFeaturesList>
      )}
    </StyledDescription>
  );
};

export default Description;
