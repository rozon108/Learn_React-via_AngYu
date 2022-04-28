var React = require("react");
var ReactDOM = require("react-dom");

const meat = "chicken";

const bodyEL = (
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Banana</li>
      <li>{meat}</li>
    </ul>
  </div>
);

//ReactDOM.render(element, where);
ReactDOM.render(bodyEL, document.getElementById("root"));
