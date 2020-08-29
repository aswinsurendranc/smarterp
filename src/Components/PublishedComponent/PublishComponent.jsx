import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import "./PublishStyle.css";
class PublishComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <p>
                <Link to="/Displaypost">published</Link>
                </p>
              
            </Fragment>
         );
    }
}
 
export default PublishComponent;