var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var TodoApp = require("TodoApp");

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    
    it('should add Todo to the todos state on handleAddTodo', () =>{
        var todoText = "test text";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        
        //create blank todos array on state
        todoApp.setState({todos: []});
        //add todoText to the handleAddTodo function on todoApp
        todoApp.handleAddTodo(todoText);
        
        //the first index of todos array should now equal todoText or 'test text';
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
    
    it('should toggle completed value when handleToggle is called', () => {
        var todoData = {
            id: 11,
            text: "Test features",
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        
        todoApp.setState({todos: [todoData]});
        //check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        //call handleToggle with 11
        todoApp.handleToggle(11);
        //verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
})