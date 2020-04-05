import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import LeftNav from "../../components/left-nav/LeftNav";
import Header from "../../components/header/Header";

import Home from '../home/Home';
import Category from '../category/Category';
import Product from '../product/Product';
import Role from '../role/Role';
import User from '../user/User';
import Pie from '../charts/Pie';
import Line from '../charts/Line';
import Bar from '../charts/Bar';

// eslint-disable-next-line
const {Footer, Content, Sider} = Layout;

class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        // 如果内存没有存储user ==> 当前没有登录
        if (!user || !user._id) {
            // 跳转到登录界面（在 render()中）
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{backgroundColor: '#fff', margin: 20}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Route path='/charts/bar' component={Bar}/>
                            <Route path='/charts/line' component={Line}/>
                            <Route path='/charts/pie' component={Pie}/>
                            <Redirect to='/'/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;