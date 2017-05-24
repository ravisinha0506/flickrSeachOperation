var React = require("react");
var ReactDOM = require("react-dom");
var Pagination = require("./pagination.jsx");

var Tile = React.createClass({
    render: function() {

        return (

            <div className="tile">
                <img src={this.props.image} id={this.props.id} alt={this.props.searchTerm} />
            </div>
        );
    }
});

module.exports = Tile;
