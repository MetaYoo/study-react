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

class Topics extends Component {
    render() {
        let {path, url} = this.props.match;
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact={true} path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route  path={`${path}/:topicId`} component={Topic}/>
                </Switch>
            </div>
        );
    }
}

function Topic() {
 let {topicId} = useParams();
 return (
     <div>
         <h3>{topicId}</h3>
     </div>
 );
}

export default withRouter(Topics);