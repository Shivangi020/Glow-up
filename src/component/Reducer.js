
const Reducer = (state,action)=>{
    
    if(action.type==="DISPLAY"){
        return {...state,cart:action.payload}
    }

    return {...state}
}

export default Reducer;