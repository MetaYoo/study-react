import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import fakeAuth from './store/store';
import AuthButton from './components/AuthButton';
import PrivateRoute from './pages/PrivateRoute';
import LoginPage from './pages/LoginPage';

class AuthLayout extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AuthButton />

                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/protected">
                            <ProtectedPage />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        );
    }
}

class PublicPage extends Component {
    render() {
        return <h3>Public</h3>
    }
}

class ProtectedPage extends Component {
    render() {
        return <h3>Protected</h3>
    }
}



export default AuthLayout;