var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

//var AddTodo = require("AddTodo");
var {AddTodo} = require("AddTodo");

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    
    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = "check Mail";
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        
        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(action);
    });
    
    it('should not dispatch ADD_TODO when invalid todo text', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var todoText = "";
        
        addTodo.refs.todoText.value = todoText;
        //[0] is the DOM node, without jquery.
        //without [0] test would fail bc its looking for jquery element 'form'
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
})