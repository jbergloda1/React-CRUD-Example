import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('');

  useEffect(() => {
   
    console.log("UseEffect run!")
    document.title = `Count is:  + ${count}`;
  },[count]);
  // function counter(){
  //   setCount(count++);
  // }

  return (
    <div>
      <p>USE EFFECT HOOK</p>
      <h1 >{count}</h1>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count+1)}>Count Up</button>
    </div>
  );
}
