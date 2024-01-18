import React,{ useState } from 'react';
import './App.css'
// import Usestate from './Components/Usestate'
// import Useobject from './Components/Useobject'
// import Usefunction from './Components/Usefunction'
// import Useeffect from './Components/Useeffect'
// import Usecontext from './Components/Usecontext'
import Task from './Components/Task';
export const ToggleTheme = React.createContext()
function App() {
  const [state,setState] = useState(true)

  const handelToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
     {/* <Usestate/> */}
     {/* <Useobject/> */}
     {/* <Usefunction/> */}
     {/* <Useeffect/> */}

     <ToggleTheme.Provider value={state}>
      <button onClick={handelToggle}>Toggle</button>
      <Task/>
    </ToggleTheme.Provider>
    </>
  )
}

export default App