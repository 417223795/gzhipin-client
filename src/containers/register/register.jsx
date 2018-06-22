/*
用户注册的路由组件
 */
import React, {Component} from 'react'
//容器组件一般都这样向外暴露
import {connect} from 'react-redux'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

//注意logo中定义的是普通的函数，所以这里直接引入即可，不需要加{}
import Logo from '../../components/logo/logo'

//List.Item这是List下面的固定的写法  指定是list下面的某一项
// const ListItem = <List.Item>;  也可以这样写
const ListItem = List.Item;

class Register extends Component {

  //注意这里设置初始值的时候不能随便设置，参照接口文档进行设置
  state = {
    username:'',
    password:'',
    password2:'',
    //如果我们这里只有两种类型，在这里设置的时候也可以设置为bool值类型
    type:'laoban'
  };

  register = () => {
    console.log(this.state)
  };

  goLogin = () => {
    //用户点击之后实现跳转，push也是可以跳转的，但是这里使用replace即可
    this.props.history.replace('/login')
  };

  //根据不同的名字收集数据
  handleChange = (name,value) => {
    this.setState({
      //对象的属性设置为变量，而不是变量，当没有[]的时候代表字符串
      [name]:value   // 如何让一个属性名是一个变量: 将属性变量名放在[]中，固定语法
    })
  };

  render() {
    const {type} = this.state
    return (
      <div>
        {/*标题，设置标题的时候 去AntD Mobile查看文档*/}
        <NavBar>用户注册</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            {/*当用户名发生改变时，会触发这个事件*/}
            <InputItem placeholder='请输入用户名' onChange={val => this.handleChange('username',val)}>用户名:</InputItem>
            <WhiteSpace/>
            {/*当种类设置为password时，输入的内容不会显示明文*/}
            <InputItem type='password' placeholder='请输入密码' onChange={val => this.handleChange('password',val)}>密码:</InputItem>
            <WhiteSpace/>
            <InputItem type='password' placeholder='请输入确认密码' onChange={val => this.handleChange('password2',val)}>确认密码:</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/*注意这里种类里面的数值不需要进行动态设置了，直接时固定的数值，因为没有传入的数值，所以没有val*/}
              <Radio onChange={() => this.handleChange('type','dashen')} checked={type==='dashen'}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio onChange={() => this.handleChange('type','laoban')} checked={type==='laoban'}>老板</Radio>
            </ListItem>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
            <WhiteSpace/>
            <Button onClick={this.goLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect()(Register)