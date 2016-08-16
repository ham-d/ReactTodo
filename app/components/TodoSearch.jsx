var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoSearch = React.createClass({
    //non-reduxx:
    // handleSearch: function(){
    //     var showCompleted = this.refs.showCompleted.checked;
    //     var searchText = this.refs.searchText.value;
        
    //     //pass showCompleted and searchText up to todoApp
    //     //onSearch is a prop passed down from todoApp
    //     this.props.onSearch(showCompleted, searchText);
    // },
    
    render: function(){
        var {dispatch, showCompleted, searchText} = this.props;
        
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="search todos" value={searchText} onChange={()=>{
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

//module.exports = TodoSearch;
export default connect((state)=>{
    return{
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
})(TodoSearch);