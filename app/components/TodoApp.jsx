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
                   text: "Walk the dog"
               }, 
               {
                   id: uuid(),
                   text: 'Clean the yard'
               },
               {
                   id: uuid(),
                   text: 'Clean room'
               },
               {
                   id: uuid(),
                   text: 'Clean kitchen'
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
                   text: text
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
   
    render: function(){
        var {todos} = this.state;
        
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;