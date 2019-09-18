import React from 'react'
import { Button } from 'antd'
import '../../static/css/common.less'

export default class BigChild extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fatherMsg:''
        }
    }
    componentDidMount() {
        console.log('BigChild',this.props)
    }

    sayDad = (msg)=>{
        // error
        // this.fatherMsg = msg
        this.setState({
            fatherMsg:msg
        })
    }
    render(){
        let {fatherMsg} = this.state
        return(
            <div className="child-wrapper">
                {
                    this.props.msg ?
                        <ul>
                            <li>{this.props.msg.name}</li>
                            <li>{this.props.msg.sex}</li>
                            <li>{this.props.msg.age}</li>
                        </ul>:
                        'BigChild!'
                }
                <Button onClick={()=>this.props.getSonMsg('我是你的BigChild!')}  type="primary">跟爸爸通信</Button>
                <p>{fatherMsg}</p>
            </div>
        )
    }
}
