import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./styles";
import { DetailedImagesProps } from "./types";

function Images({ images = [] }: DetailedImagesProps) {
  const elImages =
    images.length > 1
      ? images.map((item, index) => (
          <SwiperSlide
            key={index + item}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#fff"
            }}
          >
            <img
              src={item}
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/fallback.jpg";
              }}
              style={{
                position: "relative",
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "0",
                objectFit: "cover"
              }}
            />
          </SwiperSlide>
        ))
      : "";

  return (
    <Container>
      {images.length > 1 ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{
            width: "250px",
            height: "320px"
          }}
        >
          {elImages}
        </Swiper>
      ) : (
        <img
          src={images[0]}
          onError={e => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/fallback.jpg";
          }}
          style={{ width: "100%" }}
        />
      )}
    </Container>
  );
}

export default Images;
