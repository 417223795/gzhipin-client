/*
用户登陆的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Login extends Component {

  goRegister = () => {
    this.props.history.replace('/register')
  };

  render() {
    return (
      <div>
        <NavBar>硅谷直聘
        </NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='请输入用户名'>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入密码'>密码:</InputItem>
            <WhiteSpace/>
            <Button type='primary'>登&nbsp;&nbsp;陆</Button>
            <Button onClick={this.goRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect()(Login)