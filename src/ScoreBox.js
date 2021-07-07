import React from "react";
import allCountryScores from "./scores";
import IndividualScores from "./IndividualScores";

const ScoreBox = ({ sortDesc }) => {
  allCountryScores.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  return (
    <div>
      {allCountryScores.map((x) => (
        <div className="countryBox">
          <div className="outsideCountryBox">
            {" "}
            <br></br>
          </div>

          {x.name}
          <IndividualScores
            sortDesc={sortDesc}
            scores={x.scores}
            name={x.name}
            key={x.name}
            allCountryScores={allCountryScores}
          />
        </div>
      ))}
    </div>
  );
};

export default ScoreBox;
