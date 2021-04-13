import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };

    componentDidMount() {
        const selectedPostId = this.props.match.params.id;

        if(selectedPostId) {
            if(this.state.loadedPost === null 
                || (this.state.loadedPost && this.state.loadedPost.id !== selectedPostId))
            
                axios.get("/posts/" + selectedPostId)
                .then(response => {
                    this.setState({loadedPost: response.data}); 
                });
        }
    }

    deleteBlogPostHandler = () => {
        axios.delete("/posts/" + this.props.id)
        .then(response => {
            console.log(response)
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading Post ...</p>;
        }

        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteBlogPostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;