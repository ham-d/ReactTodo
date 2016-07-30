var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    it('should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch=
        {spy}/>);
        
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    });
    
    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch=
        {spy}/>);
        
        //change value of todoSearch's showCompleted ref value to true
        todoSearch.refs.showCompleted.checked = true;
        //simulate the change by using the value of the todoSeach.refs.showCompleted
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(true, '');
    });
})