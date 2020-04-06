import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    withRouter
} from "react-router-dom";

import fakeAuth from '../store/store';


class LoginPage extends Component {

    login = () => {
        let history = this.props.history;
        let location = this.props.location;
        let {from} = location.state || {from: {pathname: "/"}}
        fakeAuth.authenticate(() => {
            history.replace(from);
        })
    }

    render() {
        let history = this.props.history;
        let location = this.props.location;
        let {from} = location.state || {from: {pathname: "/"}}
        return (
            <div>
                 <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default withRouter(LoginPage);