import React from "react";

const IndividualScores = ({ name, scores, sortDesc }) => {
  sortDesc
    ? scores.sort((b, a) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0))
    : scores.sort((a, b) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0));

  return (
    <div className="individualScores" key={scores.n}>
      {scores.map((x) => (
        <div>
          {x.n} - {x.s}
        </div>
      ))}
    </div>
  );
};

export default IndividualScores;
