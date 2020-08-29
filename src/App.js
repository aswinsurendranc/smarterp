import React, { Component, Fragment } from 'react';
// import {  FaReact } from 'react-icons/fa';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
  } from "react-router-dom";
import Search from './Components/SearchComponent/Search';
import PostForm from './Components/PostComponent/PostForm';
import NewForm from './Components/NewForm/NewForm';
import PublishComponent from './Components/PublishedComponent/PublishComponent';
import Displaypost from './Components/DisplayPost/DisplayPost';
  
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
             <Router>
                 <div id="search">
                     <Search />
                 </div>
                <div id="bodyPart" >
                    <NewForm  />
                    <PublishComponent />
                
               </div>
                
                <Route path="/postform" exact component={PostForm}/>
                <Route path="/Displaypost" exact component={Displaypost}/>
             </Router>
            </Fragment>
         );
    }
}
 
export default App ;