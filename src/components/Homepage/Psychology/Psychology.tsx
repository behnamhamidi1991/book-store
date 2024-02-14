import React from "react";
import { psychology } from "@/data";
import "./psychology.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import CartBtn from "@/components/shared/CartButton/CartBtn";
import ReadBtn from "@/components/shared/ReadBtn/ReadBtn";

const Psychology = () => {
  return (
    <div className="psychology">
      <div className="bestbooks-header">
        <h2>روانشناسی</h2>
        <p>مجموعه کتب روانشناسی در فروشگاه از دیدگاه کاربران سایت</p>
      </div>

      <div className="bestbooks-slider">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            770: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1062: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1364: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1840: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          spaceBetween={10}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="bestbooksSwiper"
        >
          {psychology.map((book) => (
            <SwiperSlide key={book.id} className="bestbooks-slide-box">
              <Image src={book.bookImage} alt={book.title} />
              <div className="bestbooks-slide-box-info">
                <h3>{book.title}</h3>
                <div className="bestbooks-price-books">
                  <p>قیمت: {book.price}</p>
                  <p>:تخفیف: {book.percentage}</p>
                </div>
                <div className="bestbook-offprice">
                  <p>قیمت ویژه: {book.offPrice}</p>
                </div>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <CartBtn />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Psychology;
