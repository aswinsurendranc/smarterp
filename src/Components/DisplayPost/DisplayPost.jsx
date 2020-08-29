import React, { Component, Fragment } from 'react'
class DisplayPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
         }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>no posts</h1>
            </Fragment>
         );
    }
}
 
export default DisplayPost;