import React, { useState, useContext } from "react";
import Result from "./Result";
import { DemoContext } from "../App";
import { listArray } from "./Question";
const Answer = () => {
  const [value, setValue] = useState(0);
  const { state, dispatch } = useContext(DemoContext);
  //console.log(listArray);
  const AnswerHeading = listArray.at(state.keyValue);

  const SubmitInput = (e) => {
    e.preventDefault();
    dispatch({ type: `${state.keyValue}`, payload: value });
  };
  return (
    <div>
      <h1>
        {state.keyValue + 1} - {AnswerHeading.question}
      </h1>
      <form onSubmit={SubmitInput}>
        <input
          type="number"
          min={1}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">Click</button>
      </form>
      <div className="h-50">answer</div>
      <Result />
    </div>
  );
};

export default Answer;
