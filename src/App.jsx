import React from  'react'
import { RandomNumber } from './Components/RandomNumber'

export const App = () => {
  return (
    <div>
    <RandomNumber
      title="Returns a random integer from 0 to 10: "
      number={Math.floor(Math.random() * 11)}
    />
    </div>
  )
}

export default App