import React, { Component } from 'react';

// import axios from 'axios';
import axiosInstance from '../../axiosInstance';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        requestError: false
    };

    componentDidMount(){
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
            this.setState({requestError: true});
        });
    }

    selectedPostHandler(id) {
        this.setState({selectedPostId: id});
    }

    render () {

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
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;