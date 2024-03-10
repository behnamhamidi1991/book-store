"use client";
import React from "react";
import "./signup.css";
import Link from "next/link";
import { toast } from "react-toastify";

const handleSubmit = (e) => {
  e.preventDefault();
};

const page = () => {
  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-page-header">
          <h2>ساخت اکانت کاربری</h2>
          <p>
            جهت ثبت سفارش و استفاده از سرویس های سایت وارد اکانت کاربری خود شوید
          </p>
        </div>
        <input type="text" placeholder="نام و نام خانوادگی ..." />
        <input type="email" placeholder="ایمیل ..." />
        <input type="text" placeholder="رمز عبور ..." />
        <button onClick={() => toast("فیلد ها را پر کنید")}>ثبت نام</button>
        <Link href="/login" className="loginBtn">
          ورود به اکانت کاربری
        </Link>
      </form>
    </div>
  );
};

export default page;
