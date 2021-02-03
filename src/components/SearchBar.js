import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: 'google'};
        props.onSubmit(this.state.term)
    }
   

   onFormSubmit = event => {
       event.preventDefault();
       this.props.onSubmit(this.state.term);
   };

    render(){
        return (
        <div className="ui segment" style={{backgroundColor: '#329da8' }}>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input
                     type="text" 
                     value = {this.state.term}
                     onChange={(e)=> this.setState({term: e.target.value})}
                     />      
                </div>  
             </form>
        </div>
        );
    }
}

export default SearchBar;