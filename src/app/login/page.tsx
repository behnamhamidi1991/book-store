import React from "react";
import "./login.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <div className="login-page-header">
          <h2>ورود کاربران</h2>
          <p>
            جهت ثبت سفارش و استفاده از سرویس های سایت وارد اکانت کاربری خود شوید
          </p>
        </div>
        <input type="email" placeholder="ایمیل ..." />
        <input type="password" placeholder="رمز عبور ..." />
        <button>ورود</button>
        <Link href="/signup" className="signupBtn">
          ثبت نام در سایت
        </Link>
      </form>
    </div>
  );
};

export default page;
