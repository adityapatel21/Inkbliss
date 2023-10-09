import React from "react";
import "./Introduction.css";
import introductionImage from "./images/introduction.png";
import SolidButton from "../../UIElements/Buttons/SoildButton/SolidButton";

const Introduction = () => {
  return (
    <section id="LandingIntroduction">
      <div className="introduction">
        <h1>
          Welcome to <span>InkBliss</span>
        </h1>
        <h3>Where Creativity Meets Expression</h3>
        <p>
          Effortlessly capture your daily experiences and reflections in your
          own <span>digital diary</span>. Share spontaneous musings with a
          click, and turn your ideas into story or poetry in our{" "}
          <span>Creative Playground</span>. Personalize your space with themes
          and fonts to make it truly yours.
        </p>
        <p className="introduction-start-your-journey">
          Start your journey today!{" "}
        </p>
        <div className="introduction-button">
          <SolidButton text="Let’s get Started" />
        </div>
      </div>
      <div className="introduction-image">
        <img src={introductionImage} alt="Introduction_image" />
      </div>
    </section>
  );
};

export default Introduction;
