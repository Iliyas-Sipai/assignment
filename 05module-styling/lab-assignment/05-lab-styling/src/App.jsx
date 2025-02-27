import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mystyle from '/mystyle.module.css'


function App() {
    // inline CSS
  const style = { color: "blue", fontSize: "20px" };
  const color = {background:"yellow", color: "black"}
  return (
    <>
      <div>
        {/* // inline CSS */}
        <h1 style={style}>hello</h1>
        <h2 style={color}>Good morning</h2>
      </div>
{/* /* CSS Stylesheets (.css files) */}
         <div className='box'>
         <h2> name:vivo </h2>
         <h2> price:12000</h2>
          <button>Add cart</button>
         </div>
         {/* // CSS Modules (.module.css) */}

         <div className={mystyle.abc}>
             hello
         </div>

    {/* <!-- Bootstrap, --> */}

    <div className="container text-center">
      <h1 className="text-primary">Hello, Bootstrap in React!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
    </>
  )
}

export default App
