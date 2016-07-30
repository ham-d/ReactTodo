var React = require("react");

var Todo = React.createClass({
    render: function(){ 
        var {text, id, completed} = this.props;
        
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
                {text}
            </div>
        );
    }
});

module.exports = Todo;