import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Menu, Button} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    LineChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    UserOutlined,
    GroupOutlined,
    ControlOutlined,
    BarChartOutlined,
    SaveOutlined,
    MailOutlined,
} from '@ant-design/icons';

import './LeftNav.less';
import logo from '../../assets/img/logo.png';


const {SubMenu} = Menu;


class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"

                >
                    <Menu.Item key="/home">
                        <Link to="/home">
                            <PieChartOutlined/>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>

                                <MailOutlined/>
                                <span>商品</span>

                            </span>
                        }
                    >
                        <Menu.Item key="/category">
                            <Link to="/category">
                                <GroupOutlined/>
                                <span>品类管理</span></Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to="/product">
                                <SaveOutlined/>
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user">
                        <Link to="/user">
                            <UserOutlined/>
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/role">
                        <Link to="/role">
                            <ControlOutlined/>
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>

                                <BarChartOutlined/>
                                <span>图形图表</span>

                            </span>
                        }
                    >
                        <Menu.Item key="/bar">
                            <Link to="/bar">
                                <BarChartOutlined/>
                                <span>柱状图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/line">
                            <Link to="/line">
                                <LineChartOutlined/>
                                <span>折线图</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/pie">
                            <Link to="/pie">
                                <PieChartOutlined/>
                                <span>饼图</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default LeftNav;