
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  //to get the state value
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  const increment = ()=>{

    //if u want to update the state, then use dispatch function
    //in dispatch, u need to provie=de the action
    dispatch({type:"INC"})
  }

  const decrement = ()=>{
    dispatch({type:"DEC"})
  }

  //if we want to send data along use payload
  const addBy = ()=>{
    dispatch({type:"ADD", payload:10 })
  }
  
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>add by 10</button>
    </div>
  );
}

export default App;
