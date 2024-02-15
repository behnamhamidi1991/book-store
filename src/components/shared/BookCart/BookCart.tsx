import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { books } from "@/data";
import Image from "next/image";
import "./bookcart.css";

const BookCart = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="swiper-history"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id} className="swiper-slide-history">
            <Image
              src={book.bookImage}
              alt="test"
              className="bookcart-images"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BookCart;
