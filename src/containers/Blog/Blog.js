import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
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
        });
    }

    selectedPostHandler(id) {
        this.setState({selectedPostId: id});
    }

    render () {

        const posts = this.state.posts.map(
            post => <Post key={post.id}
                          author={post.author}
                          title={post.title}
                          clicked={() => this.selectedPostHandler(post.id)}/>
        );

        return (
            <div>
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