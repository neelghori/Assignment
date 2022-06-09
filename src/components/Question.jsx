import React, { useState, useContext } from "react";
import { DemoContext } from "../App";
export const listArray = [
  { question: "1   2   3   4   ....    n" },
  { question: "1   4   9   16  ....    n" },
  { question: "1   4   7   10  ....    n" },
  { question: "3   4   6   6   ....    n" },
  { question: "1   8   27  64  ....    n" },
  { question: "10  20  30  40  ....    n" },
  { question: "10  40  70  100 ....    n" },
  { question: "0   0   1   2   3   5   8   ....    n" },
  { question: "1^2 + 2^2 + 3^2 + 4^2 +    ....   n" },
  { question: "1 + 3^2/3^3 + 5^2/5^3 + 7^2/7^3 +    ....    n" },
  { question: "1/1! + 2/2! + 3/3! + 4/4! + ... N/N!" },
];
const Question = () => {
  const [active, setActive] = useState(0);
  const { dispatch } = useContext(DemoContext);
  const dispatchFunction = (key) => {
    setActive(key);
    const obj = {
      array: listArray[key],
      keys: key,
    };
    dispatch({ type: "CLEAR_ANSWER" });
    dispatch({ type: "STORE_QUESTION", payload: obj });
  };
  return (
    <div>
      {listArray.map((item, i) => {
        return (
          <>
            <div
              className={`p-1 `}
              key={i}
              onClick={() => {
                dispatchFunction(i);
              }}
              style={{
                color: `${active === i ? "red" : ""}`,
                cursor: "pointer",
              }}
            >
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <span style={{ fontWeight: "bold" }}>{i + 1}</span> -{" "}
                    {item.question}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Question;
