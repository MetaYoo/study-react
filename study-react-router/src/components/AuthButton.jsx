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

class AuthButton extends Component {
    render() {
        let history = this.props.history;
        return fakeAuth.isAuthenticated ? (
            <p>
                welcome! {""}
                <button onClick={() => {
                    fakeAuth.signOut(() => history.push("/"));
                }}>Sign out</button>
            </p>
        ) : (<p>You are not logged in </p>);
    }
}

export default withRouter(AuthButton);