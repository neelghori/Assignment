import React, { useContext } from "react";
import { DemoContext } from "../App";
const Result = () => {
  const { state } = useContext(DemoContext);
  return <h1>{state.answer}</h1>;
};

export default Result;
