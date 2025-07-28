import React, { useState } from 'react';
import Child from '../child/child';

function Parent() {
  const [name, setName] = useState("Dina");
  const [count, setCount] = useState(0);

   function toggleName() {
    setName(name === "Dina" ? "Ahmed" : "Dina");
  }
  function increaseCounter(value){
    setCount (count +value);
  }


  return (
    <>
      <h1>Parent Component</h1>
      <h2>Counter: {count}</h2>
      <h2>Name: {name}</h2>

      <button className="btn btn-primary m-2" onClick={() => increaseCounter(1)}>
        Increase Counter
      </button>
      <button className="btn btn-secondary m-2" onClick={toggleName}>
        Toggle Name
      </button>

      {}
      <Child name={name} count={count} /> 
      </>
  );
}

export default Parent;