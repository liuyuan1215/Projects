import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import menuList from './../../config/menuconfig'
import './index.css';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


export default class index extends Component {
    createMenu = (menuList) => {
        return menuList.map((elem) => {
            if (elem.children) {
                return (
                    <SubMenu title={<span><Icon type={elem.icon}></Icon>{elem.title}</span>} key={elem.path}>
                        {this.createMenu(elem.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={elem.path}>
                    <Link to={elem.path}>
                        {elem.icon ? <Icon type={elem.icon}></Icon> : null}
                        {elem.title}
                    </Link>
                </Menu.Item>
            )
        })
    }
    componentWillMount = () => {
        let list = this.createMenu(menuList);
        this.setState({
            list
        });
    }
    render() {
        return (
            <div>
                <div className="logobox">
                    <img src="/imgs/logo.png" alt=''/>
                </div>
                <Menu theme="dark" mode="inline" defaultOpenKeys={['/admin/student']}>
                    {this.state.list}
                </Menu>
            </div>
        )
    }
}
