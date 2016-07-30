var React = require("react");
var uuid = require("node-uuid");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
   getInitialState: function (){
       return {
           showCompleted: false,
           searchText: '',
           todos: [
               {
                   //uuid creates a unique id everytime.
                   id: uuid(),
                   text: "Walk the dog",
                   completed: false
               }, 
               {
                   id: uuid(),
                   text: 'Clean the yard',
                   completed: true
               },
               {
                   id: uuid(),
                   text: 'Clean room',
                   completed: true
               },
               {
                   id: uuid(),
                   text: 'Clean kitchen',
                   completed: false
               }
           ]
       };
   },
   
   handleAddTodo: function(text){
       this.setState({
           todos: [
               ...this.state.todos, 
               {
                   id: uuid(),
                   text: text,
                   completed: false
               }
            ]
       });
   },
   handleSearch: function(showCompleted, searchText){
       this.setState({
           showCompleted: showCompleted,
           searchText: searchText.toLowerCase()
       });
   },
   handleToggle: function(id){
       var updatedTodos = this.state.todos.map((todo) => {
           if(todo.id === id){
               //turns completed to opposite boolean
               //if completed is true, !todo.completed will be false and vice versa
               todo.completed = !todo.completed;
           }
           //if todo.id doesnt equal the id being passed in parameter, just return it
           return todo;
       });
       
       this.setState({todos: updatedTodos});
   },
   
    render: function(){
        var {todos} = this.state;
        
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;