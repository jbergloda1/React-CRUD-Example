import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    document.title = "Count is: " + count;
  }, [count]);
  return (
    <div>
      <p>USE EFFECT HOOK</p>
      <h1>{count}</h1>
      <button onClick={handleClick}>Count Up</button>
    </div>
  );
}
