var React = require('react');
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { hashHistory } = require("react-router");

// var Main = require('./components/Main') but shortcutted through webpack;
// var Main = require('Main');



var actions = require("actions");
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.id));
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('/');
    }
});

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


//onEnter = use middleware

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>, document.getElementById('app')
);

