
import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {

  function handelClick(){
    alert('button clicked')
  }
 
  const handelClick2 = () => {
    alert('button clicked')
  }


  return (
    <>
      <h3> React Core Concept</h3>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
    </>
  )
}

export default App
