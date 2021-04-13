import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/"
                                        activeClassName="my-active"
                                        activeStyle={{color: 'orange', textDecoration: 'underline'}} 
                                        exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                search:"?fast-preview=true",
                                hash:"#jumpToAnchor"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home Page</h1>}/>              */}
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;
