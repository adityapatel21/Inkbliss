import React from "react";
import "./PeopleReview.css";

const PeopleReview = (props) => {
  const { reviewer } = props;

  return (
    <div>
      <div className="review-card">
        <div className="reviewer-profile">
          <img src={reviewer.imageLink} alt="user_profile_image" />
          <h2>{reviewer.fullName}</h2>
          <h4>{reviewer.designition}</h4>
        </div>
        <div className="reviewer-comment">
          <div className="reviewer-comment-tag">
            {reviewer.tags.map((tag, index) => {
              return (
                <div key={index} className="tag">
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>
          <div className="reviewer-comment-description">
            <p>{reviewer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleReview;
