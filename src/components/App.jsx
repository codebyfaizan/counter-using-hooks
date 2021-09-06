//useState(Initial state, function); returns has two parameters 1) value of initial state 2)a function which can be written to customize the state property

import React from "react";
function App() {
  const [count, setCount] = React.useState(0); //Destructuring array and calling useState function with initial state set to 0

  function increase() {
    setCount(count + 1); //passing count + 1 as argument in setCount function
  }
  function decrease() {
    setCount(count - 1); // passing count - 1 as a argument in setCount function
  }
  return (
    <div className="container">
      <h1>{count}</h1> {/*Displaying the value of Count*/}
      <button onClick={decrease}>-</button>{" "}
      {/*Calling the function increase()*/}
      <button onClick={increase}>+</button>{" "}
      {/*Calling the function decrease()*/}
    </div>
  );
}

export default App;
