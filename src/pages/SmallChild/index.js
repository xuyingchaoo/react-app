import React from 'react'
import '../../static/css/common.less'
export default class SmallChild extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fatherMsg:''
        }
        console.log('SmallChild',this.props)
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
                {
                    this.props.msg ?
                        <ul>
                            <li>{this.props.msg.name}</li>
                            <li>{this.props.msg.sex}</li>
                            <li>{this.props.msg.age}</li>
                        </ul>:
                        'SmallChild!'
                }

                <button onClick={()=>this.props.getSonMsg('我是你的SmallChild!')}>向爸爸传话</button>
                <p>{fatherMsg}</p>
            </div>
        )
    }
}