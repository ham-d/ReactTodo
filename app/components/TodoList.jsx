var React = require("react");
var Todo = require("Todo");

var TodoList = React.createClass({
    render: function(){
        var {todos} = this.props;
        
        //use arrow function so 'this' will be set to TodoList not renderTodos
        var renderTodos = () => {
            return todos.map((todo) => {
                return(
                    //onToggle is a prop being passed down from parent(todoApp) component
                    //we are passing that prop to Todo component as onToggle
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;