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

import Child from "./pages/Child";
class ParamsLayout extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li>
                            <Link to="/netflix">Netflix</Link>
                        </li>
                        <li>
                            <Link to="/zillow-group">Zillow Group</Link>
                        </li>
                        <li>
                            <Link to="/yahoo">Yahoo</Link>
                        </li>
                        <li>
                            <Link to="/modus-create">Modus Create</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/:id" children={<Child />}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default ParamsLayout;