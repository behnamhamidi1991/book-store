import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./topslider.css";

import Image1 from "../../../assets/slides/1.jpg";
import Image2 from "../../../assets/slides/2.jpg";
import Image3 from "../../../assets/slides/3.jpg";

const TopSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="top-slider-slide-container">
          <div className="image-container">
            <Image src={Image1} className="image" alt="slide-image" />
          </div>
          <div className="content-container">
            <h1>مطالعه و یادگیری زیبا ترین تفریح</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Image src={Image2} className="image" alt="slide-image" />
          </div>
          <div className="content-container">
            <h1>انوع کتاب های قدیمی و جدید</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Image src={Image3} className="image" alt="slide-image" />
          </div>
          <div className="content-container">
            <h1>محیطی آرام برای مطالعه و یادگیری</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
              شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopSlider;