import React from "react";
import TopSlider from "./TopSlider/TopSlider";
import Books from "./Books/Books";
import BestBooks from "./BestBooks/BestBooks";
import Psychology from "./Psychology/Psychology";

const Homepage = () => {
  return (
    <div>
      <TopSlider />
      <Books />
      <BestBooks />
      <Psychology />
    </div>
  );
};

export default Homepage;
