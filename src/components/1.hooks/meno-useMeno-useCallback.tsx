import React, { memo, useEffect, useState } from "react";

const MenoUseMenoUseCallback = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    // setInterval(() => {
    //   setNum(Math.random())
    // }, 2000)
  }, []);

  return (
    <div>
      <p>{ num }</p>
      <Chilend num={1} />
    </div>
  );
};

const Chilend = memo(({ num }: { num: number }) => {
  console.log("Chilend");
  return (
    <>
      <p>{num}</p>
      123
    </>
  );
});

export default MenoUseMenoUseCallback;
