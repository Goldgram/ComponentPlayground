import React from "react";
import { ResultsType } from "./types";

interface ResultsProps {
  results: ResultsType;
}

export const Results = ({ results }: ResultsProps) => {
  const { totalValue } = results;

  return <div className="results">Total Value: {totalValue}</div>;
};
