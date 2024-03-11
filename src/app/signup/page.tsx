"use client";
import React, { useEffect, useState } from "react";
import "./signup.css";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

const handleSubmit = (e) => {
  e.preventDefault();
};

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {};

  useEffect(() => {}, [user]);

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

export default SignupPage;
