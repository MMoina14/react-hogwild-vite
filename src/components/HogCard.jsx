import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
      <div className="image">
        <img
          src={hog.image || "https://via.placeholder.com/150"}
          alt={hog.name || "Unnamed Hog"}
        />
      </div>
      <div className="content">
        <h3>{hog.name || "Unnamed Hog"}</h3>
        {showDetails && (
          <>
            <p>Specialty: {hog.specialty || "N/A"}</p>
            <p>Weight: {hog.weight || "Unknown"}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"] || "None"}</p>
          </>
        )}
        <button className="ui button" onClick={(e) => {
          e.stopPropagation(); 
          onHide();
        }}>
          Hide
        </button>
      </div>
    </div>
  );
}

export default HogCard;
