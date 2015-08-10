"use strict";

var React = require("react");
var GameActions = require("./../actions/GameActions");

var StartGame = React.createClass({
  handleSubmit: function() {
    GameActions.startGame();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Start</button>
      </div>
    );
  }
});

module.exports = StartGame;
