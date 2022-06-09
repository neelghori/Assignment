import { useReducer, createContext } from "react";
import Dashboard from "./components/Dashboard";
export const DemoContext = createContext("");
const initialValue = {
  keyValue: 0,
  answer: "",
};
const reducer = (state, action) => {
  let anwerValue = "";
  switch (action.type) {
    case "STORE_QUESTION":
      let value = state.keyValue;
      value = action.payload.keys;
      return {
        ...state,
        keyValue: value,
      };
    case "0":
      for (let i = 1; i <= action.payload; i++) {
        anwerValue += i + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "1":
      for (let i = 1; i <= action.payload; i++) {
        anwerValue += i * i + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "2":
      for (let i = 1; i <= action.payload; i = i + 3) {
        anwerValue += i + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "3":
      let x = 3,
        y = 4,
        z = 0;
      for (let i = 1; i <= action.payload; i++) {
        if (i % 2 == 1) {
          z = x;
          x *= 2;
        } else {
          z = y;
          y += 2;
        }
        anwerValue += z + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "4":
      for (let i = 1; i <= action.payload; i++) {
        anwerValue += i * i * i + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "5":
      for (let i = 1; i <= action.payload; i++) {
        anwerValue += i * 10 + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "6":
      for (let i = 1; i <= action.payload; i = i + 3) {
        anwerValue += i * 10 + ",";
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "7":
      let x1 = 0;
      let x2 = 0;
      let x3;
      let flag = 0;
      for (let i = 1; i <= action.payload; i++) {
        if (i === 3) {
          flag = 1;
          x1 = 0;
          x2 = 1;
        }
        if (!flag) {
          x3 = 0;
        } else {
          x3 = x1 + x2;
        }
        anwerValue += x3 + ",";
        x1 = x2;
        x2 = x3;
      }
      return {
        ...state,
        answer: anwerValue,
      };
    case "8":
      let sums = 0;

      for (let i = 1; i <= action.payload; i++) {
        let temp = i * i;
        sums += temp;
      }
      anwerValue += sums + ",";
      return {
        ...state,
        answer: anwerValue,
      };
    case "9":
      let sum = 0;
      let flags = 1;
      for (let i = 1; i <= action.payload; i++) {
        let temp = (flags * flags) / (flags * flags * flags);
        sum += temp;
        flags += 2;
      }
      anwerValue += sum + ",";
      return {
        ...state,
        answer: anwerValue,
      };
    case "10":
      let total = 0;
      for (let i = 1; i <= action.payload; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {
          res = res * j;
        }
        total = total + i / res;
      }
      return {
        ...state,
        answer: total,
      };
    case "CLEAR_ANSWER":
      return {
        ...state,
        answer: "",
      };
    default:
      return {
        ...state,
      };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <DemoContext.Provider value={{ state, dispatch }}>
      <Dashboard />
    </DemoContext.Provider>
  );
}

export default App;
