import React from "react";
import allCountryScores from "./scores";

const Worldwide = ({sortDesc}) => {
  let worldwideScoreArray = [];
  for (let i = 0; i < allCountryScores.length; i++) {
    for (let j = 0; j < allCountryScores[i].scores.length; j++) {
      worldwideScoreArray.push(allCountryScores[i].scores[j]);
    }
  }
  
  sortDesc
    ? worldwideScoreArray.sort((b, a) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0))
    : worldwideScoreArray.sort((a, b) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0));



  return (
    <div className="countryBox">
      <h3>Worldwide</h3>
      {worldwideScoreArray.map((x) => (
        <div>
          {x.n} - {x.s}
        </div>
      ))}
    </div>
  );
};

export default Worldwide;
