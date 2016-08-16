var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.addTodo(todoText));
            //non-redux:
            //this.props.onAddTodo(todoText);
        } else {
            //nothing runs and todoText form gets focused
            this.refs.todoText.focus();
        }
    },
    
    render: function(){
        return(
            <div className="contaner__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="Add item"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
})

// module.exports = AddTodo;
export default connect()(AddTodo);