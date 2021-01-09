//import the React and ReactDom libraraies
import React from "react";
import ReactDOM from "react-dom";

//Create a react componnt

const buttonFunC = function () {
  return "Click On";
};

const App = () => {
  //   const buttonText = "Click";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Your Name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonFunC()}
      </button>
    </div>
  );
};

// Take the react Component and  show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
