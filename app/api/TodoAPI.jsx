var $ = require("jquery");

module.exports = {
    
    
    //for local storage 
    // setTodos: function(todos){
    //     if($.isArray(todos)){
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //         return todos;
    //     }
    // },
    // getTodos: function(){
    //     var stringTodos = localStorage.getItem('todos');
    //     var todos = [];
    //     try {
    //         //JSON.parse turns string into array.
    //         todos = JSON.parse(stringTodos);
    //     } catch(e){
    //         //if error (e) do nothing
    //     }
    //     return $.isArray(todos) ? todos : [];
        
    //     // if($.isArray(todos)){
    //     //     return todos;
    //     // } else {
    //     //     return [];
    //     // }
    // },
    
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        
        //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        })
        //filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            //                                -1 means does not exist. so > -1 means it exists.
            //                                 indexOf returns the index of first value of specified value
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        //Sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed){
                // -1 means a should return before b
                return -1
            } else if(a.completed && !b.completed){
                // 1 means b should return before a
                return 1
            } else {
                //0 means no need to sort bc both values are equal
                return 0 
            }
        });
        
        return filteredTodos;
    }
};