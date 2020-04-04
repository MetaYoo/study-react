import React from 'react';
import {message} from 'antd';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

class App extends React.Component {
    handleClick() {
        message.info("点击成功")
    }

    render() {
        return (
            <Router>
                <Switch>{/*只匹配其中一个*/}
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/' component={Admin}></Route>
                </Switch>
            </Router>
        )
    }

}

export default App;
