import { useReducer } from "react";
import { produce } from "immer";

interface Data {
  result: number;
}

interface Action {
  type: "add" | "sub";
  num: number;
}

const reducer = (state: Data, action: Action): Data => {
  switch (action.type) {
    case "add":
      return {
        result: state.result + action.num,
      };
    case "sub":
      return {
        result: state.result - action.num,
      };
    default:
      return state;
  }
};

const reducer1 = (state: any, action: any) => {
  return produce(state, (state: any) => {
    state.a.c += action.num;
  });
};

const UseReducer = () => {
  const [res, dispatch] = useReducer(reducer, { result: 0 });

  const [result, dispatch1] = useReducer(reducer1, {
    a: {
      c: 1,
    },
    b: {},
  });

  return (
    <>
      <div>
        <p>结果: {res.result}</p>
        <button onClick={() => dispatch({ type: "add", num: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: "sub", num: 1 })}>-1</button>
      </div>
      <div>
        {JSON.stringify(result)}
        <button onClick={() => dispatch1({ num: 10 })}>10</button>
      </div>
    </>
  );
};

export default UseReducer;
