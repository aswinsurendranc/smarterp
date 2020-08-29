import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import "./NewForm.css";
class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
               <p >
                   <Link to="/postform">new post</Link>
               </p>
            </Fragment>
         );
    }
}
 
export default NewForm;
