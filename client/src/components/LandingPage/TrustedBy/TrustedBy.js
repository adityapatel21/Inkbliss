import React from "react";
import "./TrustedBy.css";
import trustiesList from "./TrustiesList";

const TrustedBy = () => {
  return (
    <section id="trustedBy">
      <h1>
        Trusted By <span>!</span>
      </h1>
      <div className="trusties-profiles">
        {trustiesList.map((trusty, index) => {
          return (
            <div key={index} className="trusty-profile">
              <img src={trusty.profileImage} alt="profile_image" />
              <h3>{trusty.name}</h3>
            </div>
          );
        })}
        <div className="user-info">
          <h1> + 367,091 </h1>
          <p>users</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
