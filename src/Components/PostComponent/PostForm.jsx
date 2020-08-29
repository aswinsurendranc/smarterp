import React, { Component, Fragment } from 'react';
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
            details:"",
         }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({[ e.target.name]: e.target.value });
        console.log(e.target.value);
    }
    handleSubmit(e){
          e.preventDefault();
         let Post={
            title:this.state.title,
            details:this.state.details,
         };
         console.log(Post);
    } 
   

    componentDidMount(){
        window.fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(),
        })
        .then(data=>{
            data.json()
            .then(res=>{
                console.log(res);
            })
            .catch();
        })
        .catch(err=>console.log("error occured"));
        
    }
    

    render() { 
        return ( 
            <Fragment>
                <h1>POST FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="title"placeholder="title" id="title" required onChange={this.handleChange}/>
                    </div>
                    <div>
                        <textarea name="details" id="details" cols="30" rows="10" onChange={this.handleChange} required />
                    </div>
                    <button id="PostButton">Add post</button>
                </form>
            </Fragment>
         );
    }
}
 
export default PostForm;