var React = require("react");
var ReactDOM = require('react-dom');
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

//var TodoSearch = require("TodoSearch");
import {TodoSearch} from 'TodoSearch';

describe("TodoSearch", () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        var searchText = 'Dog';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch=
        {spy}/>);
        
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(action);
    });
    
    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch=
        {spy}/>);
        
        //change value of todoSearch's showCompleted ref value to true
        todoSearch.refs.showCompleted.checked = true;
        //simulate the change by using the value of the todoSeach.refs.showCompleted
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(action);
    });
})