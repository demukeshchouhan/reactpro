/*global React*/
/*global ReactDOM*/
var MainComponent =  React.createClass({
    render : function(){
        return(
            <div>
                <h2>#react node</h2>
            </div>
        );
    }
});


ReactDOM.render(<MainComponent />,document.getElementById("get_node"));