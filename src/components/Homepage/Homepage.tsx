import React from "react";
import TopSlider from "./TopSlider/TopSlider";
import Books from "./Books/Books";
import BestBooks from "./BestBooks/BestBooks";
import Psychology from "./Psychology/Psychology";
import StudentDiscount from "./StudentDiscount/StudentDiscount";
import BookCart from "../shared/BookCart/BookCart";

const Homepage = () => {
  return (
    <div>
      <TopSlider />
      <Books />
      <BestBooks />
      <Psychology />
      <StudentDiscount />
    </div>
  );
};

export default Homepage;
