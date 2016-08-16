var React = require("react");
var {connect} = require("react-redux");
var moment = require("moment");
var actions = require("actions");

export var Todo = React.createClass({
    render: function(){ 
        var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        
        var renderDate = () => {
            var message = 'created ';
            var timestamp = createdAt;
            
            if(completed){
                message = "Completed ";
                timestamp = completedAt;
            }
            
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mn a');
        };
        
        //reason why we pass a function instead of the onToggle prop straight to onClick or onChange:
        //By creating an anonymous function, we can specify arguments to onToggle and execute it when the click event fires.
        
        //option1
        // return (
        //or instead of onClick on parent, use onChange on the input field
        //     <div> 
        //         <input type="checkbox" checked={completed} onChange={()=>{this.props.onToggle(id)}}/>
        //         {text}
        //     </div>
        // );
        
        //either option works
        
        //option2
        return (
            //if using onClick on parent div add readOnly attribute on input ex: <input type="checkbox" readOnly />
            <div className={todoClassName} onClick={()=>{
                //if not using redux:
                //this.props.onToggle(id)
                dispatch(actions.toggleTodo(id));
                }}> 
                <div>
                    <input type="checkbox" checked={completed} readOnly/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});



//connect is a function that is called with the components
//no param is required bc all props are being passed down from todoList
//module.exports = connect()(Todo);

export default connect()(Todo);