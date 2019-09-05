import React from 'react';
import BigChild from '../BigChild'
import SmallChild from '../SmallChild'
import "./index.css"
export default class Father extends React.Component{
    render(){
        return(
            <div className="father">
                我是爸爸,下面是我两个儿子：
                <BigChild />
                <SmallChild/>
                <button>叫爸爸</button>
            </div>
        );
    }
}
