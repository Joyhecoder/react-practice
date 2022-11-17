
import './App.css';

function App() {
  const name = "Joy"
  const isNameShowing = true

  const Person = () => {
    return (
      <>
        <h1>Name: John</h1>
        <h2>Last Name: Doe</h2>
        <h3>Age: 30</h3>
      </>
    )
  }
  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "World"}!</h1>
      <Person />
      {name ? (
        <>
          <h1>{name}</h1> 
        </> ) :
        (<h1>There is no name </h1>)
      }
    </div>
  );
}

export default App;
