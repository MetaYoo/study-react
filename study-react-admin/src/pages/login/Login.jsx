import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    message
} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './Login.less';
import logo from '../../assets/img/logo.png';
import {reqLogin} from '../../api/index';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from "../../utils/storageUtils";

/**
 * async和await 简化promise对象的使用：不用再使用then()来指定成功/失败的会带哦函数
 * 以同步编码（没有回调函数了）方式实现异步流程
 * 哪里写 await? 在返回promise的表达式左侧写await:不想要promise,想要promise异步执行的成功的value数据
 * 哪里写async？ await所在函数（最近的）定义的左侧写async
 *
 */
class Login extends Component {

    onFinish = async (values) => {
        console.log(values);
        const {username, password} = values;
        const res = await reqLogin(username, password);
        if (res.status === 0) {
            message.info('请求成功:' + res.username);
            memoryUtils.user = res;
            storageUtils.saveUser(res);
            //this.props.history.push()
            // 不需要有回退到登录界面
            this.props.history.replace('/')
        } else {
            message.info('请求失败');
        }
    }

    render() {
        // 如果用户已登录，自动跳转到管理界面
        const user = memoryUtils.user;
        if (user && user._id) {
            return <Redirect to='/'/>
        }

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form name="normal_login" className="login-form" onFinish={this.onFinish}>
                        <Form.Item name="username" rules={[
                            {required: true, message: '请输入用户名'},
                            {min: 4, message: '用户名最小长度为4'},
                            {max: 12, message: '用户名最大长度为12'},
                            {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}]}>
                            <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                            <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="密码" type="password"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default Login;