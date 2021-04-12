import React, { Component } from 'react';

import axiosInstance from '../../../axiosInstance';
import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    };

    componentDidMount(){
        
        console.log(this.props);

        axiosInstance.get("/posts")
        .then((response) => {
            const serverPosts = response.data.splice(0,4);
            const updatedPosts = serverPosts.map(
                (post) => {
                    return {
                        ...post,
                        author: "rumman " + post.id
                    }
                }
            );

            this.setState({posts: updatedPosts});
        })
        .catch(error => {
            // this.setState({requestError: true});
            console.log(error);
        });
    }

    selectedPostHandler(id) {
        this.setState({selectedPostId: id});
    }
    
    render() {

        let posts = <h1>Something went Wrong!!!</h1>
        
        if(!this.state.error) {
            posts = this.state.posts.map(
                post => <Post key={post.id}
                              author={post.author}
                              title={post.title}
                              clicked={() => this.selectedPostHandler(post.id)}/>
            );    
        }
        
        return (
            <section className="Posts">
                   {posts}
            </section>
        );
    }
}

export default Posts;