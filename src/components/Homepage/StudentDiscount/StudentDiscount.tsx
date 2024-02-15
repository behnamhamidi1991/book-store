import React from "react";
import "./studentdiscount.css";
import Image from "next/image";
import studentImage from "../../../assets/student.webp";
import OffTag from "@/components/shared/OffTag/OffTag";

const StudentDiscount = () => {
  return (
    <div className="student-discount">
      <div className="student-discount-right">
        <div className="student-discount-right-top">
          <div className="off-tag-wrapper">
            <OffTag />
          </div>
          <h1 className="student-discount-percentage-title">
            تخفیف ویژه دانشجویان و دانش آموزان
          </h1>
          <p className="student-discount-percentage-detail">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="student-discount-right-middle"></div>
      </div>
      <div className="student-discount-left">
        <Image
          src={studentImage}
          alt="image"
          className="student-discount-image"
        />
      </div>
    </div>
  );
};

export default StudentDiscount;
