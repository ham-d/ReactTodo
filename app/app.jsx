var React = require('react');
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
// var Main = require('./components/Main') but shortcutted through webpack;
// var Main = require('Main');
var TodoApp = require("TodoApp");
var actions = require("actions");
var store = require('configureStore').configure();

store.subscribe(() => {
    store.getState();
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted);

//load foundation
$(document).foundation();

//style!, css!, sass! are loaders, helps with bundling
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <TodoApp />, document.getElementById('app')
);

