import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="ui eigth wide colum">
      <div className="ui card" aria-label="hog card" onClick={toggleDetails}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
        </div>
        {showDetails && (
          <div className="content">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          </div>
        )}
        <div className="extra content">
          <button className="ui button" onClick={(e) => {
            e.stopPropagation();
            onHide();
          }}>
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;
