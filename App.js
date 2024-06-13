const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

//this object is the place where ur providing attributes to the tag

console.log(heading);
//at the end of the React.createElement is just and object
//It basically creates javascript object. - this is the React element  this is not the actual fiull tag.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//this render method takes this object and convert in to heading h1 tag and put it in to the Dom.

//jsx makes our life easy when we make tags.
