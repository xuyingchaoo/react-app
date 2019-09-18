import React from 'react'
import {Link} from 'react-router-dom'
import BigChild from '../BigChild'
import SmallChild from '../SmallChild'
import store from '../../store'
import { Button } from 'antd'
import './index.less'
export default class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'父组件传值子组件',
            sonMsg:'',
            childInfo:store.getState()
        }
        console.log(store.getState())
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    //父组件向子组件传值/父组件调用子组件方法
    sayDad =()=>{
        this.refs.bigChild.sayDad('爸爸！')
        this.refs.smallChild.sayDad('爸爸！')
    }
    //父组件接受子组件传值/子组件调用父组件方法
    getSonMsg = (msg)=>{
        this.setState({
            sonMsg:msg
        })
    }
    updateInfo = () =>{
        const action = {
            smallChild:{
                name:'欧阳娜娜',
                sex:'女',
                age:'18'
            },
            type:'update'
        }
        store.dispatch(action) // 解析action
    }
    handleStoreChange = () =>{
        this.setState({
            childInfo:store.getState()
        })
    }
    turnToPage = () =>{
        // console.log(this)
        this.props.history.push({pathname:'/SmallChild',query:{name:'爸爸',sex:'男',age:'30'}})
        // this.props.location.query

    }
    render(){
        let {sonMsg,childInfo,msg} = this.state,
            {bigChild,smallChild} = childInfo
        return(
            <div className="father">
                我是爸爸,下面是我两个孩子：{msg}
                <ul>
                    <li><Link to="/BigChild/朱碧石">{bigChild.name}</Link></li>
                    <li><Link to={{pathname :'/SmallChild',query :{name:'易烊千玺'}}} >{smallChild.name}</Link></li>
                    <li onClick={this.turnToPage}>点我跳转</li>
                </ul>
                <div style={{marginTop:'20px'}}>
                    <Button onClick={this.sayDad} style={{marginRight:'20px'}} type="primary">叫爸爸</Button>
                    <Button onClick={this.updateInfo} type="primary">更新store数据</Button>
                </div>
                <p>{sonMsg}</p>
                <BigChild getSonMsg={this.getSonMsg}
                    msg={bigChild}
                    ref="bigChild"
                />
                <SmallChild getSonMsg={this.getSonMsg}
                    msg={smallChild}
                    ref="smallChild"
                />
            </div>
        )
    }
}
