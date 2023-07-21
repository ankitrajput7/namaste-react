import React from "react";
import ReactDOM from "react-dom/client";



const heading1 = <h1>Hello</h1>;
/**
 * here heading1 is is a react element.
 * heading1 at the end is a javascript object.
 */



const Heading = () => {
  return (
    <div>
      {heading1}
      <h1>functional component</h1>
    </div>
  );

  /**
   * the return code is a piece of JSX.
   */
};
/**
 * here heading is a example of functional component.
 */
console.log(Heading);



const IndexFunction = () => {
  return (
    <>
      <Heading></Heading>
    </>
  );
};
/*
here IndexFunction is a example of function composition.
*/



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IndexFunction />);
