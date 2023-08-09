import React from "react";
import ReactDOM from "react-dom/client"


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child0" }, [
//     React.createElement("h1", { key: 0 }, "this is h1 tag"),
//     React.createElement("h2", { key: 1 }, "this is h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child1" }, [
//     React.createElement("h1", { key: 0 }, "this is h1 tag"),
//     React.createElement("h2", { key: 1 }, "this is h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// console.log(root);
// root.render(parent);


// Coding Assignment point 1

                      // const element = React.createElement("div", {}, [
                      //   React.createElement("h1", { class: "title"}, "this is h1 tag"),
                      //   React.createElement("h2", {class: "title"}, "this is h2 tag"),
                      //   React.createElement("h3", {class: "title"}, "this is h3 element")
                      // ])

                      // const root = ReactDOM.createRoot(document.getElementById("root"));
                      // root.render(element)

// Coding Assignment point 2

                      // const elem = <div>
                      //   <h1 className="title">this is h1 tag</h1>
                      //   <h2 className="title">this is h2 tag</h2>
                      //   <h3 className="title">this is h3 tag</h3>
                      // </div> 

                      // const root = ReactDOM.createRoot(document.getElementById("root"))
                      // root.render(elem)

// Coding Assignment point 3 and 4

                      // const Elem = ({id}) => {
                      //   return (
                      //     <div>
                      //       <h1 className="title">this is h1 tag {id}</h1>
                      //       <h2 className="title">this is h2 tag {id}</h2>
                      //       <h3 className="title">this is h3 tag {id}</h3>
                      //     </div> 
                      //   )
                      // }

                      // const root = ReactDOM.createRoot(document.getElementById("root"))
                      // root.render(<Elem id="2"/>)

// Coding Assignment point 5

// const Child = () => {
//   return (
//     <div>
//       <h3>Inside child component</h3>
//     </div>
//   )
// }

// const Parent = () => {
//   return(
//     <div>
//       <p>This is component composition example</p>
//       {Child()}
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Parent/>)