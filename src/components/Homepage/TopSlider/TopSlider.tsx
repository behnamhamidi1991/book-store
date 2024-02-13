import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./topslider.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCreditCard2Front } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";

import Image1 from "../../../assets/slides/1.jpg";
import Image2 from "../../../assets/slides/2.jpg";
import Image3 from "../../../assets/slides/3.jpg";

const TopSlider = () => {
  return (
    <div className="topSlider-component">
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
      <div>
        <div className="header-bottom">
          <div className="header-bottom-box">
            <div className="header-bottom-box-icon">
              <TbTruckDelivery />
            </div>
            <div className="header-bottom-box-content">
              <h2>ارسال فوری</h2>
              <p>ارسال فوری و ویژه به تهران و تمامی شهرهای ایران</p>
            </div>
          </div>
          <div className="header-bottom-box">
            <div className="header-bottom-box-icon">
              <BsCreditCard2Front />
            </div>
            <div className="header-bottom-box-content">
              <h2>پرداخت آسان</h2>
              <p>پرداخت از طریق آنلاین و کیف پول امکان پذیر می باشد</p>
            </div>
          </div>
          <div className="header-bottom-box">
            <div className="header-bottom-box-icon">
              <IoPricetagsOutline />
            </div>
            <div className="header-bottom-box-content">
              <h2>تخفیف ویژه</h2>
              <p>تمامی اجناس ما دارای تخفیفات ویژه کاربران سایت می باشد</p>
            </div>
          </div>
          <div className="header-bottom-box">
            <div className="header-bottom-box-icon">
              <GoShieldCheck />
            </div>
            <div className="header-bottom-box-content">
              <h2>امنیت پرداخت</h2>
              <p>درگاه پرداخت ایمن و دارای مجوز رسمی کسب و کارهای مجازی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
