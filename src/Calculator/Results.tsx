import React from "react";
import { ResultsType } from "./types";

interface ResultsProps {
  results: ResultsType;
}

export const Results = ({ results }: ResultsProps) => {
  const { endDate, resultArray } = results;
  const lastResult = resultArray[resultArray.length - 1];

  return (
    <div className="results">
      <p>End date: {endDate.substring(0, 10)}</p>
      <p>Total interest: {lastResult.totalInterest.toFixed(2)}</p>
    </div>
  );
};
