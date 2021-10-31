import React from  'react'
import { RandomNumber } from './Components/RandomNumber'

export const App = () => {
  return (
    <div>
    <RandomNumber
      min={ 0 }
      max={ 10 }
    />
    </div>
  )
}

export default App