import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './app'
import Users from './user'
import Notfound from "./Notfound"

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">Users</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/user" component={Users} />
                <Route component={Notfound} />
            </Switch>
            
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'))