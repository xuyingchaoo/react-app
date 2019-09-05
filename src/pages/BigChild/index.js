import React from 'react'
import '../../static/css/common.less'

export default class BigChild extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fatherMsg:''
        }
    }
    sayDad = (msg)=>{
        // this.fatherMsg = msg
        this.setState({
            fatherMsg:msg
        })
    }
    render(){
        let {fatherMsg} = this.state
        return(
            <div className="child-wrapper">
                BigChild <button onClick={()=>this.props.getSonMsg('我是你的BigChild!')} style={{marginLeft:'20px'}}>向爸爸传话</button>
                <p>{this.props.msg}</p>
                <p>{fatherMsg}</p>
            </div>
        );
    }
}