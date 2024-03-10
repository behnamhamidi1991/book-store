import React from "react";
import "./singleprofile.css";

const SingleProfile = ({ params }: any) => {
  return (
    <div className="single-profile">
      <h1>پروفایل کاربری</h1>

      <p>صفحه پروفایل شما</p>

      <p>{params.id}</p>
    </div>
  );
};

export default SingleProfile;
