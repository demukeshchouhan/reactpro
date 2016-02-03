/*global React*/
/*global ReactDOM*/
var MainComponent =  React.createClass({displayName: "MainComponent",
    render : function(){
        return(
            React.createElement("div", null, 
                React.createElement("h2", null, "#react node")
            )
        );
    }
});


ReactDOM.render(React.createElement(MainComponent, null),document.getElementById("get_node"));