import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Overlay,
  Slide,
  SlideButton,
  SliderWrapper,
  Subtitle,
  Title
} from "./styles";

function Banner() {
  const { t } = useTranslation("page-home");

  const slides = [
    {
      id: 3,
      image: "/images/banner3.jpg",
      title: t("banner.1.title"),
      subtitle: t("banner.1.subtitle"),
      buttonText: t("banner.1.buttonText"),
      buttonLink: "/store"
    },
    {
      id: 4,
      image: "/images/banner4.jpg",
      title: t("banner.2.title"),
      subtitle: t("banner.2.subtitle"),
      buttonText: t("banner.2.buttonText"),
      buttonLink: "/store"
    },
    {
      id: 5,
      image: "/images/banner5.jpg",
      title: t("banner.3.title"),
      subtitle: t("banner.3.subtitle"),
      buttonText: t("banner.3.buttonText"),
      buttonLink: "/store"
    }
  ];

  return (
    <Box sx={{ margin: "-24px -24px 35px" }}>
      <SliderWrapper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 6000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <Slide image={slide.image}>
                <Overlay>
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                  <SlideButton href={slide.buttonLink}>
                    {slide.buttonText}
                  </SlideButton>
                </Overlay>
              </Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </Box>
  );
}

export default Banner;
