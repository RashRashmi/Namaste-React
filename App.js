import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react"
// );
// React.createElement => React elemement => JS Objects => html element  (render)
// console.log(heading);
//at the end of the React.createElement is just an object

//JSX = JSX  is not  A html in js but it is a HTML  like syntax.

//React Element
const jsxHeading = <h1 id="heading">by using jsx</h1>;
//JSX =>  React.createElement => React elemement => JS Objects => html element  (render)
console.log(jsxHeading);

const Title = function () {
  return <h1>hey TiTLE</h1>;
};

//React component
const HeadingComponent = () => {
  return (
    <div>
        {jsxHeading}
      <Title />
      <h1>Writing component by using functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

//this render method takes this object and convert in to heading h1 tag and put it in to the Dom.

//jsx makes our life easy when we make tags.
