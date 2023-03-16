import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Heading 1 for parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );

// console.log(heading);

/*************************** */
// JSX
const Heading = (
  <h1 id="title" key="h2">
    Namaste React 1 ( class Components )
  </h1>
);

// for functional component
const Title = () =>(
  <h1 id="title" key="h2">
    Namaste React 2 ( functional Components )
  </h1>
)






// React Components
// Fiunctional Components
// Name of components always start with a capital letter ( not mandatory  but nice practice )

const HeaderComponent = () => {
  return (
    
    <div>
      
      {Heading}
      {/* for adding a functional component   */}
      <Title />
      <h1>Namaste React Functional Components</h1>
      <h2>This is h2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
// root.render(heading);  // when i have to render a react element

// for functional compoent render

root.render(<HeaderComponent/>);