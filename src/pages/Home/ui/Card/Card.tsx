import React from "react";
import { CardProps } from "./types";
import {
  CardContainer,
  ImageWrapper,
  Image,
  ContentWrapper,
  Title,
  Subtitle,
  Description,
  Footer
} from "./styles";

export default function Card({
  imageUrl,
  title,
  subtitle,
  description,
  children,
  footer
}: CardProps) {
  return (
    <CardContainer>
      {imageUrl && (
        <ImageWrapper>
          <Image src={imageUrl} alt={title} />
        </ImageWrapper>
      )}
      <ContentWrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && <Description>{description}</Description>}
        {children}
      </ContentWrapper>
      {footer && <Footer>{footer}</Footer>}
    </CardContainer>
  );
}
