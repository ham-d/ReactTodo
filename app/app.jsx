var React = require('react');
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
// var Main = require('./components/Main') but shortcutted through webpack;
// var Main = require('Main');
var TodoApp = require("TodoApp");
var actions = require("actions");
var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

//local storage
// var TodoAPI = require("TodoAPI");
// store.subscribe(() => {
//     var state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));


//load foundation
$(document).foundation();

//style!, css!, sass! are loaders, helps with bundling
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, document.getElementById('app')
);

