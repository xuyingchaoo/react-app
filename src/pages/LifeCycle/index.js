import React from 'react'
export default class Clock extends React.Component{
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>生命周期</div>
        )
    }
}
