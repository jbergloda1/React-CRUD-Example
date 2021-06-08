import React, { useContext, useState } from "react";

const MyContext = React.createContext(null);
function A() {
  const { input } = useContext(MyContext);
  const [inputParent, setInputParent] = useState(null);
  return (
    <div>
      <div>
        <input
          value={input}
          value1={inputParent}
          onChange={(e) => setInputParent(e.target.value)}
          type="text"
        ></input>
      </div>
    </div>
  );
}
function B() {
  const { onChange } = useContext(MyContext);
  const [input, setInput] = useState(null);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}
function C() {
  const { onChange } = useContext(MyContext);
  const [input, setInput] = useState(null);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}

function App2() {
  const [input, setInput] = useState(null);

  return (
    <MyContext.Provider value={{ input, onChange: setInput }}>
      <p> DEMO useContext</p>
      <p>----------------</p>
      <div>
        <p>Context Cha</p>
        <A />

        <p>------------------</p>
        <p>Context Con 1</p>
        <B />

        <p>Context Con 2</p>
        <C />
      </div>
      <p> ------------------</p>
    </MyContext.Provider>
  );
}
export default App2;
