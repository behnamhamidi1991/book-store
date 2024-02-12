"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../app/bookicon.svg";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import userImage from "../../../public/users/1.jpg";
import Link from "next/link";
import "./header.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const { toggle, theme }: any = useContext(ThemeContext);

  return (
    <div dir="rtl" className="header">
      <div className="header-top">
        <div className="header-logo">
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="logo"
            className="header-logo-image"
          />
          <p> کتابفروشی و کتابخانه تیسفون</p>
        </div>
        <div className="header-search">
          <div className="header-search-box">
            <input
              type="text"
              placeholder="می تونی بین 10 میلیون جلد کتاب موجود جستوجو کنی"
            />
            <button className="search-icon">
              <IoSearch />
            </button>
          </div>
        </div>
        <div className="header-icons">
          <button className="header-cart-btn">
            <FaShoppingCart />
          </button>
          <button className="header-theme-btn" onClick={toggle}>
            {theme ? <FaMoon /> : <IoSunnySharp />}
          </button>
          <Link href="/dashboard" className="header-user-icon">
            <FaUser />
          </Link>
        </div>
      </div>
      <div className="header-bottom">
        <ul className="header-links"></ul>
      </div>
    </div>
  );
};

export default Header;
