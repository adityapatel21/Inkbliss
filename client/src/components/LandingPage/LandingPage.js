import React from "react";
import "./LandingPage.css";

import NavigationBar from "../UIElements/NavigationBar/NavigationBar";
import Introduction from "./Introduction/Introduction";
import WhyInkBliss from "./WhyInkBliss/WhyInkBliss";
import WhatPeopleSays from "./WhatPeopleSays/WhatPeopleSays";
import TrustedBy from "./TrustedBy/TrustedBy";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavigationBar />
      <Introduction />
      <WhyInkBliss />
      <WhatPeopleSays />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default LandingPage;
