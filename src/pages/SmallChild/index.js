import React from 'react'
import { Button } from 'antd'
import '../../static/css/common.less'
import store from '../../store'
export default class SmallChild extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fatherMsg:'',
            childInfo:store.getState()
        }
        console.log('SmallChild',this.props,store.getState())
    }
    sayDad = (msg)=>{
        // this.fatherMsg = msg
        this.setState({
            fatherMsg:msg
        })
    }
    render(){
        let {fatherMsg,childInfo} = this.state
        return(
            <div className="child-wrapper">
                {
                    this.props.msg ?
                        <ul>
                            <li>{this.props.msg.name}</li>
                            <li>{this.props.msg.sex}</li>
                            <li>{this.props.msg.age}</li>
                        </ul>:
                        childInfo.smallChild.name
                }

                <Button onClick={()=>this.props.getSonMsg('我是你的SmallChild!')}  type="primary">跟爸爸通信</Button>
                <p>{fatherMsg}</p>
            </div>
        )
    }
}
