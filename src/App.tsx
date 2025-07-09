import React from "react";
import "./App.css";
import { HappyComponent } from "./HappyComponent";

export const App = () => {
  return (
    <div className="App">
      <p>Hello App</p>
      <HappyComponent title="Dog" />
    </div>
  );
};
