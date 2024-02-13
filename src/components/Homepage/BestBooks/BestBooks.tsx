import React from "react";
import { wholeBooks } from "@/data2";
import "./bestbooks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const BestBooks = () => {
  return (
    <div className="bestbooks">
      <div className="bestbooks-header">
        <h2>برترین عناوین</h2>
        <p>برترین عناوین موجود در فروشگاه از دیدگاه کاربران سایت</p>
      </div>

      <div className="bestbooks-slider">
        <Swiper
          slidesPerView={5}
          loop={true}
          // centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          modules={[Pagination]}
          className="bestbooksSwiper"
        >
          {wholeBooks.map((book) => (
            <SwiperSlide key={book.id} className="bestbooks-slide-box">
              <Image src={book.bookImage} alt={book.title} />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestBooks;
