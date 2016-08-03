var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe('TodoAPI', () => {
    //beforeEach is a mocha function that gets called before every test
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    
    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            
            //when working with arrays and objects, use toEqual over toBe
            //toBe checks if theyre the same object or array in memory
            //toEqual compares the values on the array or object
            expect(actualTodos).toEqual(todos);
        });
        
        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            //should not run bc badTodos is not an array
            TodoAPI.setTodos(badTodos);
            
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    
    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            
             //when working with arrays and objects, use toEqual over toBe
            //toBe checks if theyre the same object or array in memory
            //toEqual compares the values on the array or object
            expect(actualTodos).toEqual([]);
        });
        
        it('should return todos if valid array in localStorage', () =>{
            var todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];
            
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            
            expect(actualTodos).toEqual(todos);
            
        })
    });
});