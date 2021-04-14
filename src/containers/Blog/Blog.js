import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth: false
    }

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
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/post" component={Posts}/>
                    <Route component={() => <h1>Error 404 Not Found</h1>}/>

                    {/* the redirect will be applied to anything that didnt match previously */}
                    {/* <Redirect from="/" to="/post"/> */}
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
