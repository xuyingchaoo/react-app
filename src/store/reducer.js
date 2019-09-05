const defaultState = {
    info:{
        name:'朱碧石',
        sex:'男',
        age:'18'
    }
}
export default (state = defaultState,action)=>{
    console.log(action)
    if(action.type === 'update'){
        // why copy old state -> newState ? reducer 可以接收state 不能修改state！！！
        const newState = JSON.parse(JSON.stringify(state)) // 深度拷贝
        newState.info = action.info
        return newState
    }
    return state
}
