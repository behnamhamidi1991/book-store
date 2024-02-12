import React from "react";
import Image from "next/image";
import Logo from "../../app/bookicon.svg";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import userImage from "../../../public/users/1.jpg";
import Link from "next/link";
import "./header.css";

const Header = () => {
  return (
    <div dir="rtl" className="header">
      <div className="header-top">
        <div className="header-logo">
          <Image src={Logo} width={30} height={30} alt="logo" />
          کتابفروشی و کتابخانه تیسفون
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="می تونی بین 10 میلیون جلد کتاب موجود جستوجو کنی"
          />
          <IoSearch className="search-icon" />
        </div>
        <div className="header-icons">
          <FaShoppingCart />
          <FaMoon />
          <Link href="/dashboard">
            <Image src={userImage} width={50} height={50} alt="dashboard" />
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
