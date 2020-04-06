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
import fakeAuth from "../store/store";

class PrivateRoute extends Component {
    render() {
        console.log(this.props)
        let {children, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={({location}) =>
                    fakeAuth.isAuthenticated ? (children) :
                        (<Redirect to={{pathname: "/login", state: {from: location}}}/>)
                }
            />
        );
    }
}

export default PrivateRoute;