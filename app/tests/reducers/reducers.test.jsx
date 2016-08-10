var expect = require("expect");
var df = require("deep-freeze-strict");

var reducers = require("reducers");

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            //when testing its best not to include dependencies that also need to be tested
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer('', action);
            // var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            
            var res = reducers.showCompletedReducer(false, action);
            // var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
});