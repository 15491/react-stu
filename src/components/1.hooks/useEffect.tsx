import { useState ,useEffect } from "react";



const UseEffect = () => {

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count => count + 1)
  }

  useEffect(() => {
    console.log(count, 'count')
    return () => {
      console.log('clear')
    }
  }, [count])

  return (
    <div>
      {count}
      <button onClick={add}>+1</button>
    </div>
  );
}

export default UseEffect;
