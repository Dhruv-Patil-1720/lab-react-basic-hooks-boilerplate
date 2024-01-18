import React,{useState} from 'react'

function useObject() {
    const [state, setState] = useState({age:19, siblings:3});

    const handleState = (val)=>{
    
      setState({
        ...state,[val]:state[val]+1
      })
    }
  
    const {age,siblings} = state;
  
    return(
      <div>
        <h1>USE OBJECT STATE</h1>
        <h3>My Current Age is {age}</h3>
        <h4>My siblings {siblings}</h4>
        <button onClick={()=>{handleState("age")}}>age</button>
        <button onClick={()=>{handleState("siblings")}}>sib</button>
      </div>
    )
}

export default useObject