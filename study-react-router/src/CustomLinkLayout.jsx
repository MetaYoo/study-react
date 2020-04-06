import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useRouteMatch
} from "react-router-dom";



class CustomLinkLayout extends Component {
    render() {
        return (
            <Router>
                <OldSchoolMenuLink
                    label="Home"
                    to="/"
                    activeOnlyWhenExact={true}
                />
                <OldSchoolMenuLink to="/about" label="About"/>
                <hr/>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route  path="/about" component={About}/>
                </Switch>
            </Router>
        );
    }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </div>
    );
}

export default CustomLinkLayout;