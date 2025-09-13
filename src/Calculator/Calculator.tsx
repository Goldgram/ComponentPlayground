import React from "react";
import { Form } from "./Form";
import "./Calculator.css";
import { DEFAULT_STATE } from "./constants";
import { FormType, State } from "./types";
import { calculateResults } from "./functions";
import { Results } from "./Results";

export const Calculator = () => {
  const [state, setState] = React.useState<State>(DEFAULT_STATE);

  const updateState = (partialState: Partial<State>) => {
    setState((currentState) => {
      return {
        ...currentState,
        ...partialState,
      };
    });
  };

  const updateFrom = (newForm: FormType) => {
    updateState({ form: newForm });
  };

  const calculate = () => {
    const newResults = calculateResults(state.form);
    updateState({ results: newResults });
  };

  return (
    <div className="calculator">
      <Form form={state.form} setForm={updateFrom} onSubmit={calculate} />
      {state.results && <Results results={state.results} />}
    </div>
  );
};
