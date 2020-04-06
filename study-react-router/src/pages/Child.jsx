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

class Child extends Component {
    render() {
        console.log(this.props.history)
        console.log(this.props.location.pathname)
        console.log(this.props.match)
        const id = this.props.match.params.id;
        return (
            <div>
                <h3>ID: {id}</h3>
            </div>
        );
    }
}

export default withRouter(Child);