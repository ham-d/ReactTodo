var React = require("react");
var {connect} = require("react-redux");

// var Todo = require("Todo");
import Todo from 'Todo';
var todoAPI = require("TodoAPI");

export var TodoList = React.createClass({
    render: function(){
        var {todos, showCompleted, searchText} = this.props;
        
        //use arrow function so 'this' will be set to TodoList not renderTodos
        var renderTodos = () => {
            var filteredTodos = todoAPI.filterTodos(todos, showCompleted, searchText);
            if(filteredTodos.length === 0 ){
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            
            return filteredTodos.map((todo) => {
                return(
                    //onToggle is a prop being passed down from parent(todoApp) component
                    //we are passing that prop to Todo component as onToggle
                    //for not using redux:
                    //<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                    <Todo key={todo.id} {...todo} />
                );
            });
        };
        
        return (
            <div>
               {renderTodos()}
            </div>
        );
    }
});

//connect is a function that is called with the component.
//takes in state param and returns whatever porp we need from state.
export default connect((state) => {
    return state;
})(TodoList);