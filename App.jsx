import React,{useState} from 'react'

const App = () => {
    let[count,setCount]=React.useState(0)
    let handlechangeincrement=()=>{
        setCount(count+1)
    }
    let handlechangedecrement=()=>{
        setCount(count-1)
    }
    let handelchange=()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handlechangeincrement}>+INCREMENT</button>
        <button onClick={handlechangedecrement}>-DECREMENT</button>
        <button onClick={handelchange}>RESET</button>
    </div>
  )
}

export default App