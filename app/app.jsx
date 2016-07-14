var React = require('react');
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
// var Main = require('./components/Main') but shortcutted through webpack;
// var Main = require('Main');
var TodoApp = require("TodoApp");


//load foundation
$(document).foundation();

//style!, css!, sass! are loaders, helps with bundling
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <TodoApp />, document.getElementById('app')
);