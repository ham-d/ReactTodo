var React = require("react");
var moment = require("moment");

var Todo = React.createClass({
    render: function(){ 
        var {text, id, completed, createdAt, completedAt} = this.props;
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
            <div onClick={()=>{this.props.onToggle(id)}}> 
                <input type="checkbox" checked={completed} readOnly/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;