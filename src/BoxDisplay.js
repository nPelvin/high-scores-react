import React, { useState } from "react";
import Worldwide from "./Worldwide";
import ScoreBox from "./ScoreBox";


const BoxDisplay = () => {
  const [sortDesc, setSortDesc] = useState(true);
  return (
    <div className="boxDisplay">
      <h3>High Scores Per Country</h3>{" "}
      <button
        onClick={() => {
          setSortDesc(!sortDesc);
        }}
      >
        Sort Scores {sortDesc ? "⬇️" : "⬆️"}
      </button>
      <Worldwide sortDesc={sortDesc} />
      <ScoreBox sortDesc={sortDesc} />
    </div>
  );
}

export default BoxDisplay;
