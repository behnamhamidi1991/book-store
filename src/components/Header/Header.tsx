"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../app/bookicon.svg";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import "./header.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { toggle, theme }: any = useContext(ThemeContext);

  return (
    <div dir="rtl" className="header">
      <div className="header-top">
        <div className="hamburger-menu">
          <button onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
        <div className="header-logo">
          <Image
            src={Logo}
            width={20}
            height={20}
            alt="logo"
            className="header-logo-image"
          />
          <p> کتابفروشی و کتابخانه تیسفون</p>

          <div className="header-logo-hamburger"></div>
        </div>
        <div className="header-middle">
          <ul className={menu ? "header-links show" : "header-links"}>
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
