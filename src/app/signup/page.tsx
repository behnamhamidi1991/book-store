"use client";
import React, { useEffect, useState } from "react";
import "./signup.css";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/shared/Spinner/Spinner";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("success", response.data);
      toast.success("اکانت کاربری با موفقیت ساخته شد");
      router.push("/login");
    } catch (error: any) {
      console.log("خطا در ثبت نام");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={onSignup}>
        <div className="spinnerContainer">{loading ? <Spinner /> : null}</div>
        <div className="signup-page-header">
          <h2>ساخت اکانت کاربری</h2>
          <p>
            جهت ثبت سفارش و استفاده از سرویس های سایت وارد اکانت کاربری خود شوید
          </p>
        </div>
        <input
          type="text"
          placeholder="نام کاربری ..."
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="ایمیل ..."
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="رمز عبور ..."
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="signupBtn">ثبت نام</button>
        <Link href="/login" className="loginBtn">
          ورود به اکانت کاربری
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
