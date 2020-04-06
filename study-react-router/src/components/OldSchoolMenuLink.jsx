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

class OldSchoolMenuLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            to: props.to,
            activeOnlyWhenExact: props.activeOnlyWhenExact
        };
    }

    render() {
        let match = useRouteMatch({
            label: this.state.label,
            to: this.state.to,
            activeOnlyWhenExact: this.state.activeOnlyWhenExact
        });
        return (
            <div>
                {match && "> "}
                <Link to={this.state.to}>{this.state.label}</Link>
            </div>
        );
    }
}

export default OldSchoolMenuLink;