var React = require("react");
var Todo = require("Todo");

var TodoList = React.createClass({
    render: function(){
        var {todos} = this.props;
        
        //use arrow function so 'this' will be set to TodoList not renderTodos
        var renderTodos = () => {
            if(todos.length === 0 ){
                return (
                    <p className="container__message">Nothing to do</p>
                );
            }
            
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