var MainComponent =  React.createClass({displayName: "MainComponent",
    
    componentWillMount : function(){
      return  console.log("component will mount...");
    },
 
    
    counter : function(){
        this.setState({
           count : this.state.count + 1
        });
    },
    
    getInitialState : function(){
      return {
          count :0
      }  
    },
    
    
    render : function(){
        return(
            React.createElement("div", {className: "row add_padding"}, 
            React.createElement("div", {className: "paper_board"}, 
                React.createElement("h2", null, "#Hello ", this.props.name), 
                React.createElement("p", null, "lorem ipsum paragraph"), 
                React.createElement("button", {className: "btn", onClick: this.counter}, this.state.count, " ", "Count+")
            ), 
             React.createElement(List, null)
            )
        );
    }
});


var List = React.createClass({displayName: "List",
    
    getInitialState : function(){
      return {
          items : [
               "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
        item : []
      }
      
    },
    
    componentWillMount : function(){
          this.setState({
              item : this.state.items
          })
    },
    render : function(){
        return(
            React.createElement("div", {className: "paper_board list"}, 
                React.createElement("ul", null, 
                
                    this.state.items.map(function(val){
                        return React.createElement("li", {key: val}, val)
                    })
                
                )
            )
        );
    }
});


ReactDOM.render(React.createElement(MainComponent, {name: "shady"}),document.getElementById("get_node"));