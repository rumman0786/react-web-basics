import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/post"
                                        activeClassName="my-active"
                                        activeStyle={{color: 'orange', textDecoration: 'underline'}} 
                                        exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                search:"?fast-preview=true",
                                hash:"#jumpToAnchor"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home Page</h1>}/>              */}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/post" component={Posts}/>
                    <Redirect from="/" to="/post"/>
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
