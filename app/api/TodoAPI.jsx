var $ = require("jquery");

module.exports = {
    setTodos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            //JSON.parse turns string into array.
            todos = JSON.parse(stringTodos);
        } catch(e){
            //if error (e) do nothing
        }
        return $.isArray(todos) ? todos : [];
        
        // if($.isArray(todos)){
        //     return todos;
        // } else {
        //     return [];
        // }
    }
};