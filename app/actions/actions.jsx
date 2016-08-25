import firebase, {firebaseRef, githubProvider} from 'app/firebase/index.js';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return{
        type: 'SET_SEARCH_TEXT',
        //searchText: searchText
        //same as searchText(es6)
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        todo 
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var updateTodo = (id, updates) => {
    return{
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

//non-firebase
// export var toggleTodo = (id) => {
//     return{
//         type: 'TOGGLE_TODO',
//         id
//     };
// };

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
           //id generated by firebase
           //id: uuid(),
           text: text,
           completed: false,
           createdAt: moment().unix(),
           completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);
        
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    }; 
};

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child('todos/' + id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }
}

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var todosRef = firebaseRef.child('todos');
        
        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            var parsedTodos = [];
            
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
           
           dispatch(addTodos(parsedTodos));
        });
    };
};

export var login = (uid) => {
    return {
        type: "LOGIN",
        uid
    };
};

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
            console.log("Auth worked!", result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};


export var logout = () => {
    return {
        type: "LOGOUT"
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
        });
    };
};