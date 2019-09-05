import React from 'react'
import BigChild from '../BigChild'
import SmallChild from '../SmallChild'
import store from '../../store'
import './index.less'
export default class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'父组件传值子组件',
            sonMsg:''
        }
        console.log(store.getState())
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
            info:{
                name:'欧阳娜娜',
                sex:'女',
                age:'18',
            },
            type:"update"
        }
        store.dispatch(action) // 解析action
    }
    render(){
        let {msg,sonMsg} = this.state
        return(
            <div className="father">
                我是爸爸,下面是我两个儿子：
                <button onClick={this.sayDad}
                    style={{marginRight:'20px'}}
                >叫爸爸</button>
                <button onClick={this.updateInfo}>更新store数据</button>
                {sonMsg}
                <BigChild getSonMsg={this.getSonMsg}
                    msg={msg}
                    ref="bigChild"
                />
                <SmallChild getSonMsg={this.getSonMsg}
                    msg={msg}
                    ref="smallChild"
                />
            </div>
        );
    }
}
