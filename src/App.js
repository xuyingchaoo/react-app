import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
import './App.css'
import Father from './pages/Father'
import BigChild from './pages/BigChild'
import SmallChild from './pages/SmallChild'
import Clock from './pages/Clock'
import LifeCycle from './pages/LifeCycle'

export default class RouterComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menu: [
        {'name': 'father', 'pathname': '/'},
        {'name': 'BigChild', 'pathname': '/BigChild'},
        {'name': 'SmallChild', 'pathname': '/SmallChild'},
        {'name': 'Clock', 'pathname': '/Clock'}
      ]
    }
  }
  render() {
    let {menu} = this.state
    return (
        <div className="App">
          <Layout className="layout">
            <Router>
            <Header>
              <div className="logo" />
              <Menu
                  defaultSelectedKeys={['0']}
                  mode="horizontal"
                  style={{ lineHeight: '64px' }}
                  theme="dark"
              >
                {
                  menu.map((item,index)=>{
                    return <Menu.Item key={index}><Link to={item.pathname}>{item.name}</Link></Menu.Item>
                  })
                }
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                  <Route component={Father}
                      exact
                      path="/"
                  />
                  <Route component={BigChild}
                      path="/BigChild/:name"
                  />
                  <Route component={SmallChild}
                      path="/SmallChild"
                  />
                  <Route component={Clock}
                      path="/Clock"
                  />
                  <Route component={LifeCycle}
                      path="/LifeCycle"
                  />
              </div>
            </Content>
            </Router>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>,
        </div>
    )
  }
}
