import { Box } from "@mui/material";
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

const slides = [
  {
    id: 1,
    image: "/images/banner1.png",
    title: "Натуральные продукты",
    subtitle: "Фермерская еда у тебя дома",
    buttonText: "К покупкам",
    buttonLink: "/products"
  },
  {
    id: 2,
    image: "/images/banner2.png",
    title: "Горячие предложения",
    subtitle: "Скидки до 50% только этой недели!",
    buttonText: "Смотреть",
    buttonLink: "/hot-deals"
  }
];

function Banner() {
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
