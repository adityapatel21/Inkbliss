import React, { useState, useEffect } from "react";
import "./WhatPeopleSays.css";
import PeopleReview from "./PeopleReview/PeopleReview";

import reviewerList from "./ReviewerList";

const WhatPeopleSays = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviewerList.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="whatPeopleSays">
      <h1>
        What People Says <span>!</span>
      </h1>
      <div className="what-people-says-carousels">
        <div className="what-people-says-carousels-inner">
          {[...reviewerList, reviewerList[0]].map((reviewer, index) => (
            <div
              key={index}
              className={
                index === activeIndex ? "slide-active" : "slide-inactive"
              }
              style={{
                transform: `translateX(-${activeIndex * 55}rem)`, // Initial slide position
              }}
            >
              <PeopleReview key={reviewer.fullName} reviewer={reviewer} />
            </div>
          ))}
        </div>
      </div>
      <div className="active-slide-dot">
        {reviewerList.map((element, index) => {
          return (
            <i
              key={index}
              className={
                index === activeIndex
                  ? "fa-solid fa-circle-dot active-indicator"
                  : "fa-solid fa-circle-dot"
              }
              onClick={() => setActiveIndex(index)}
            ></i>
          );
        })}
      </div>
    </section>
  );
};

export default WhatPeopleSays;
