import { useState } from 'react';
import './App.css';

let users=[]

function App() {

  const [num, setNum] = useState(0)

  const onAddClick = ()=>{
    setNum(num+1)
    users.push(num)
  }
  const onResetClick = ()=>{
    setNum(0)
    users=[]
  }

  function PlaceBlock(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <div className="box" key={number.toString()} />
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  return (
    <div className="App">
      <button className="main-controls" onClick={onAddClick}>Add</button>
      <button className="main-controls" onClick={onResetClick}>Reset</button>
      <PlaceBlock numbers={users}/>
    </div>
  );
}

export default App;
