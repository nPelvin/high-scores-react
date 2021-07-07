import React, { useState } from "react";
import ScoreBox from "./ScoreBox";


const BoxDisplay = () => {
  const [sortDesc, setSortDesc] = useState(false);
  return (
    <div className="boxDisplay">
      <h3>High Scores Per Country</h3>{" "}
      <button
        onClick={() => {
          setSortDesc(!sortDesc);
        }}
      >
        Sort Scores {sortDesc ? "⬇️" : "⬆️" }
      </button>
      <ScoreBox sortDesc={sortDesc} />
    </div>
  );
}

export default BoxDisplay;
