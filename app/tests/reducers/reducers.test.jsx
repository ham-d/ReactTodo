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
            
            //var res = reducers.searchTextReducer('', action);
            //deepfreeze
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            
            //var res = reducers.showCompletedReducer(false, action);
            //deep freeze
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    completedAt: 9287837
                }
            };
            var res = reducers.todosReducer(df([]), df(action));
            
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        
        it('should toggle todo', () => {
            var todos = [{
                id: '123',
                text: 'something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            
            //firebase
            var updates = {
                completed: false,
                completedAt: null
            };
            
            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            
            //non-firebase
            // var action = {
            //     type: 'TOGGLE_TODO',
            //     id: '123'
            // };
            var res = reducers.todosReducer(df(todos), df(action));
            
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
            //non-firebase
            // expect(res[0].completed).toEqual(false);
            // expect(res[0].completedAt).toEqual(undefined);
        });
        
        it('should add existing todos', () => {
            var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: "ADD_TODOS",
                todos
            };
            
            var res = reducers.todosReducer(df([]), df(action));
            
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});