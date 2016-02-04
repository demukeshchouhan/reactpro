var MainComponent =  React.createClass({
    
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
            <div className="row add_padding">
            <div className="paper_board" >
                <h2>#Hello {this.props.name}</h2>
                <p>lorem ipsum paragraph</p>
                <button className="btn" onClick={this.counter}>{this.state.count} {"Count+"}</button>
            </div>
            { <List /> }
            </div>
        );
    }
});


var List = React.createClass({
    
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
            <div className="paper_board list">
                <ul>
                {
                    this.state.items.map(function(val){
                        return <li key={val}>{val}</li>
                    })
                }
                </ul>
            </div>
        );
    }
});


ReactDOM.render(<MainComponent name="shady" />,document.getElementById("get_node"));