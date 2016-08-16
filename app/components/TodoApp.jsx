var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

// var TodoList = require("TodoList");
import TodoList from 'TodoList';
//var AddTodo = require("AddTodo");
import AddTodo from 'AddTodo';
//var TodoSearch = require("TodoSearch");
import TodoSearch from 'TodoSearch';
//for non-redux:
// var TodoAPI = require("TodoAPI");


var TodoApp = React.createClass({
    render: function(){
        //non-redux:
        // var {todos, showCompleted, searchText} = this.state;
        // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

//var TodoApp = React.createClass({
    //non-redux:
//   getInitialState: function (){
//       return {
//           showCompleted: false,
//           searchText: '',
//           todos: TodoAPI.getTodos()
//       };
//   },
   //non-redux:
//   componentDidUpdate: function(){
//       TodoAPI.setTodos(this.state.todos);
//   },
    // handled with reducers
    //non-redux:
//   handleAddTodo: function(text){
//       this.setState({
//           todos: [
//               ...this.state.todos, 
//               {
//                   id: uuid(),
//                   text: text,
//                   completed: false,
//                   createdAt: moment().unix(),
//                   completedAt: undefined
//               }
//             ]
//       });
//   },
    //non-redux:
//   handleSearch: function(showCompleted, searchText){
//       this.setState({
//           showCompleted: showCompleted,
//           searchText: searchText.toLowerCase()
//       });
//   },
//   handleToggle: function(id){
//       var updatedTodos = this.state.todos.map((todo) => {
//           if(todo.id === id){
//               //turns completed to opposite boolean
//               //if completed is true, !todo.completed will be false and vice versa
//               todo.completed = !todo.completed;
//               todo.completedAt = todo.completed ? moment().unix() : undefined;
//           }
//           //if todo.id doesnt equal the id being passed in parameter, just return it
//           return todo;
//       });
       
//       this.setState({todos: updatedTodos});
//   },
    // render: function(){
    //     //non-redux:
    //     // var {todos, showCompleted, searchText} = this.state;
    //     // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        
    //     return(
    //         <div>
    //             <h1 className="page-title">Todo App</h1>
    //             <div className="row">
    //                 <div className="column small-centered small-11 medium-6 large-5">
    //                     <div className="container">
    //                         <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
    //                         <TodoSearch onSearch={this.handleSearch} />
    //                         <AddTodo onAddTodo={this.handleAddTodo} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    //}

module.exports = TodoApp;