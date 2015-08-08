"use strict";

var Dispatcher = require("flux").Dispatcher;
var assign = require("object-assign");

var GameDispatcher = assign(new Dispatcher, {
  handleViewAction: function(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
});

module.exports = GameDispatcher;
