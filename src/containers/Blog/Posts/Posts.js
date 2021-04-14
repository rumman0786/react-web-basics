import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axiosInstance from '../../../axiosInstance';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

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
        console.log('[selectedPostHandler] ' + id);
        // this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/post/' + id});
        // this.props.history.push('/post/' + id);
    }
    
    render() {

        let posts = <h1>Something went Wrong!!!</h1>
        
        if(!this.state.error) {
            posts = this.state.posts.map(
                post =>
                    // <Link to={'/' + post.id}>
                        <Post key={post.id}
                              author={post.author}
                              title={post.title}
                              clicked={() => this.selectedPostHandler(post.id)}/>
                    // </Link>
            );    
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;
