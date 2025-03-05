import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AvoidReRendersExample from './AvoidReRendersExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* • Task 1:
          o Create a functional component with a counter using the useState() hook. Include
           buttons to increment and decrement the counter. */}
        <h1>count {count}</h1>
        <button onClick={() => setCount(count+1) }>Add</button>
        <button onClick={() => setCount(count-1) }>Remove</button>
        {/* 
        • Task 2:
            o Use the useEffect() hook to fetch and display data from an API when thecomponent mounts.
        • Task 3:
            o Create react app with use of useSelector & useDispatch. */}
         {/* • Task 4:
         o Create react app to avoid re-rendersin react application by useRef ?    */}

<AvoidReRendersExample/>
    </>
  )
}

export default App
