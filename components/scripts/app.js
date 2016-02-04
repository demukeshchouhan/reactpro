var MainComponent =  React.createClass({
 
    
    counter : function(){
        this.setState({
           count : this.state.count + 1
        });
    },
    
    filterList : function(event){
        var updatedList = this.state.initialItems;
        updatedList =  updatedList.filter(function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        
        this.setState({
            items : updatedList
        });
    },
        
    componentWillMount : function(){
          this.setState({
              items : this.state.initialItems
          });
    },
    getInitialState : function(){
      return {
          initialItems : [
               "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
        items : [],
        count :0
      }
      
    },

    
    
    render : function(){
        return(
            <div className="row add_padding">
            <div className="paper_board" >
                <h2># {this.props.name}</h2>
                <p>lorem ipsum paragraph</p>
                <button className="btn" onClick={this.counter}>{this.state.count} {"Count+"}</button>
            </div>
            <div className="paper_board" >
                <h2>#Search Component</h2>
             <input type="text" className="form_field" 
                placeholder="Search"
                onChange={this.filterList} />
                { <List items={this.state.items} /> }
            </div>
            
            </div>
        );
    }
});


var List = React.createClass({
    
    render : function(){
        return(
            <div className="list">
                <ul>
                {
                    this.props.items.map(function(val){
                        return <li key={val}>{val}</li>
                    })
                }
                </ul>
            </div>
        );
    }
});


ReactDOM.render(<MainComponent name="Component" />,document.getElementById("get_node"));