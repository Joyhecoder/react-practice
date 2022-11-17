
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const name = "Joy"
  const isNameShowing = true

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(100)
  }, [])
  

  const Person = ({name, lastName}) => {
    return (
      <>
        <h1>Name: {name}</h1>
        <h2>Last Name: {lastName} </h2>
        <h3>Age: 30</h3>
      </>
    )
  }
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "World"}!</h1>
      <Person name="Mr. props" lastName="Joe" />
      {name ? (
        <>
          <h1>Oh yea! {name}</h1> 
        </> ) :
        (<h1>There is no name </h1>)
      }

      <button onClick={() => setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
