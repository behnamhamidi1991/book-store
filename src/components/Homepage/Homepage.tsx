import React from "react";
import TopSlider from "./TopSlider/TopSlider";
import Books from "./Books/Books";
import BestBooks from "./BestBooks/BestBooks";

const Homepage = () => {
  return (
    <div>
      <TopSlider />
      <Books />
      <BestBooks />
    </div>
  );
};

export default Homepage;
