import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IterationSample from '../component/IterationSample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='react'>ch6 컴포넌트 반복 </h1>
      <IterationSample />
    </>
  )
}

export default App
