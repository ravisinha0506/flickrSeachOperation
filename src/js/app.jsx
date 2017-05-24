var React = require("react");
var ReactDOM = require("react-dom");

var methods = require("./methods/methods.jsx");

var Nav = require("./components/nav.jsx");
var Grid = require("./components/grid.jsx");

var App = React.createClass({

    render: function() {
        return (
            <div>
                <Nav methods={methods} />

                <section id="images"></section>
            </div>
        );

    }

});

// renders <App />
ReactDOM.render(
  <App />,
  document.getElementById("app")
);

// initialises page
methods.getPhotos("1", "puppy");
