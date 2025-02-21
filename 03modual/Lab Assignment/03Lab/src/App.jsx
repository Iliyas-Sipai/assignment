import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Usercard from './Usercard'
import Counter from './Counter'



function App() {
  const [count ,SetCount] = useState(0);
    return (
      <>
      <Greeting name={  "iliyas"}/>
      <Usercard name={"iliyas"} age={"18"} location={"agol"}/>
      <div>
        <h1>count{count}</h1>
       <button onClick={ () => SetCount(count+1)}>Add</button>
    </div>
         <Counter/>
    </>
  )
   }

export default App
