import React,{useState} from 'react'

function UseFunction() {
    const [currAge, setAge] = useState(19);
    const [currSib, setSib] = useState(3);
  
    return(
      <div>
        <h1>INITIALIZE STATE FROM FUNCTION</h1>
        <h3>My Current Age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
  
        <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
        <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
      </div>
    )
}

export default UseFunction