var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var AddTodo = require("AddTodo");

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    
    it('should call onAddTodo with valid data', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var todoText = "check Mail";
        
        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(todoText);
    });
    
    it('should not call onAddTodo with INVALID data', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        var todoText = "";
        
        addTodo.refs.todoText.value = todoText;
        //[0] is the DOM node, without jquery.
        //without [0] test would fail bc its looking for jquery element 'form'
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
})