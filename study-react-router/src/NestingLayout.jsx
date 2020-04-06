import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
    withRouter
} from 'react-router-dom';
import Home from "./pages/Home";
import Topics from "./pages/Topics";

class NestingLayout extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/topics" component={Topics}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NestingLayout;