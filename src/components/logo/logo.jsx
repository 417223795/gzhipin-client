/*
logo 图片，只是一个简单的图片，没有交互，也没有动态组件。
所以这里设置为一个简单的函数
 */
//注意这里必须引入react  不管用不用都需要引入
import React from 'react';
import logo from './images/logo.png'
//因为我们在config-overrides.js进行了封装，所以这里只能是引入less文件
import './logo.less'

export default function Logo() {
  return (
    //我们在后面会对这里的标签进行样式定义，所以这里应该给予class名称，方便之后进行样式设定
    <div className='logo-container'>
      <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}