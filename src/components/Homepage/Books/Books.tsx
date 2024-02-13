import React from "react";
import "./books.css";
import { books } from "@/data";
import Image from "next/image";
import CartBtn from "@/components/shared/CartButton/CartBtn";
import ReadBtn from "@/components/shared/ReadBtn/ReadBtn";

const Books = () => {
  return (
    <div className="books-container">
      <div className="books-header">
        <h2>قرفه پر فروش ها</h2>
        <p>کتاب های پرفروش و محبوب از دید مخاطبین ما</p>
      </div>

      <div className="books-box">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-image-container">
              <Image
                src={book.bookImage}
                alt={book.title}
                className="book-image"
              />
            </div>

            <div className="book-content">
              <h2>{book.title}</h2>
              <p className="book-details">
                {book.details.substring(1, 89)} ...
              </p>
              <div className="price-box">
                <p className="book-price">قیمت: {book.price} تومان</p>
                {book.offer === true ? (
                  <p className="book-off-price">تخفیف: {book.offPrice}</p>
                ) : null}
                {book.offer === true ? (
                  <p className="book-off-percentage">{book.percentage}</p>
                ) : null}
              </div>
              <div className="books-btn-container">
                <CartBtn />
                <ReadBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
