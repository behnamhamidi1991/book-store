"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../app/bookicon.svg";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
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
            width={20}
            height={20}
            alt="logo"
            className="header-logo-image"
          />
          <p> کتابفروشی و کتابخانه تیسفون</p>
        </div>
        <div className="header-middle">
          <ul className="header-links">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/">وبلاگ</Link>
            </li>
            <li>
              <Link href="/">رویدادها</Link>
            </li>
            <li>
              <Link href="/">درباره ما</Link>
            </li>
            <li>
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <button className="header-cart-btn">
            <FaShoppingCart />
          </button>
          <button className="header-theme-btn" onClick={toggle}>
            {theme === "dark" ? <IoSunnySharp /> : <IoMdMoon />}
          </button>
          <Link href="/dashboard" className="header-user-icon">
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
