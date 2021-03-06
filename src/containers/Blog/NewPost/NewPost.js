import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleBlogPostSubmit = () => {
        const blogPost = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post("/posts/", blogPost)
        .then(response => {
            console.log(response);
            // pressing back button will take to previous state
            this.props.history.push('/posts'); 

            // pressing back button will NOT take to previous state
            // this.props.history.replace('/posts'); 

            // this.setState({submitted:true});
        });
    }

    render () {

        let redirectContent = null;
        if(this.state.submitted) {
            redirectContent = <Redirect to='/posts' />;
        } 
        
        return (
            <div className="NewPost">
                {redirectContent}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.handleBlogPostSubmit}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;