/*
*     
  <div id="parent">
    <div id="child">
        <h1>this is h1 tag</h1>
        <h2>this is h1 tag</h2>
    </div>
    <div id="child2">
        <h1>this is h1 tag</h1>
        <h2>this is h1 tag</h2>
    </div>
  </div>
*
*
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child0" }, [
    React.createElement("h1", { key: 0 }, "this is h1 tag"),
    React.createElement("h2", { key: 1 }, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child1" }, [
    React.createElement("h1", { key: 0 }, "this is h1 tag"),
    React.createElement("h2", { key: 1 }, "this is h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
console.log(root);
root.render(parent);
