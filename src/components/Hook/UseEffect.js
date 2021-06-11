import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(count);

  useEffect(() => {
   
    console.log("UseEffect run!")
    document.title = `Count is:  + ${count + time}`;
  },[count, time]);

  function counter(){
    setTime(time + 1)
  }

  return (
    <div>
      <p>USE EFFECT HOOK</p>
      <h1 >{count + time}</h1>
      <button onClick={counter}>Count up</button>
      <button onClick={() => setCount(Math.min(count+1, 3))}>Count</button>
    </div>
  );
}
