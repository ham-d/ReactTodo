import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require("expect");

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text actions', () => {
        var action  = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        //action = the object made above
        expect(res).toEqual(action);
    });
    
    it('should generate toggle show completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    })
    
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: '123abc',
                text: "helloworld",
                completed: false,
                completedAt: 0
            }
            //non-firebase
            //todo: 'thing to do'
        };
        
        var res = actions.addTodo(action.todo);
        //non-firebase
        //var res = actions.addTodo(action.text);
        
        expect(res).toEqual(action);
    });
    
    //done is used for async tests
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = "My todo item";
        
        store.dispatch(actions.startAddTodo(todoText)).then(()=>{
            //getActions returns an array of actions fired on store
            const actions = store.getActions();
            
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });
    
    it('should generate add todos action object', () => {
        var todos = [{
            id: '111',
            text: 'anything',
            completed: false,
            completedAt: undefined,
            createdAt: 3300
        }];
        
        var action = {
            type: "ADD_TODOS",
            todos
        };
        
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });
    
    it('should generate toggle todo action', () => {
        var action = {
            type:"UPDATE_TODO",
            //non firebase
            // type: 'TOGGLE_TODO',
            id: '123',
            updates: {completed: false}
        };
        var res = actions.updateTodo(action.id, action.updates);
        //non firebase
        // var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
    
    describe('Tests with firebase todos', () => {
        var testTodoRef;
        
        //beforeEach is a mocha function defines code before every test
        beforeEach((done) => {
            var todosRef = firebaseRef.child('todos');
            
            todosRef.remove().then(() => {
                testTodoRef = firebaseRef.child('todos').push();
                testTodoRef.set({
                    text: 'something to do',
                    completed: false,
                    createdAt: 234543
                });
            }).then(() => done())
            .catch(done);
        });
        
        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });
        
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore();
            const action = actions.startToggleTodo(testTodoRef.key, true);
            
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                
                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                
                done();
            }, done);
        });
        
        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = actions.startAddTodos();
            
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                
                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions.todos[0].text).toEqual('something to do');
                
                done();
            }, done);
        });
    });
})