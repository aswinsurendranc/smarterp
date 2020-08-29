import React, { Component, Fragment } from 'react';
// import "./Search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           term:"",
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  handleChange(e) {
    this.setState({ term: e.target.value });
    console.log(e.target.value);
  }
  handleSubmit(e){
      e.preventDefault();
    //  this.term="";
  }
    render() { 
        return ( 
            <Fragment>
                <div>
                <form >
                <input id="userinput" type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                <button type="submit" onSubmit={this.handleSubmit}>X</button>
                </form>
                </div>
               
            </Fragment>
         );
    }
}
 
export default Search;