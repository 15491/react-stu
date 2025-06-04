import React, { createContext, useContext } from "react";

const messageContext = createContext("hello");

const UseContext = () => {
  return (
    <div>
      <messageContext.Provider value={'123'}>
        <Grandpa />
      </messageContext.Provider>
    </div>
  );
};

const Grandpa = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

const Parent = () => {
  const message = useContext(messageContext);

  return <div>{message}</div>;
};

export default UseContext;
