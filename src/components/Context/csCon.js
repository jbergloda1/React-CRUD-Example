import React, { useContext, useState } from "react";

const MyContext = React.createContext(null);
function A() {
  const { input } = useContext(MyContext);
  return (
    <div>
      <div>
        <span className="badge badge-success">{input}</span>
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
      <div>
        <A />
        <B />
        <button className="btn btn-primary">click</button>
        <C />
        <button className="btn btn-success">click</button>
      </div>
    </MyContext.Provider>
  );
}
export default App2;
