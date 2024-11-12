import React, {useState} from 'react'
import  Count  from '../components/Count'

export const CountPage = () => {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }
     
  return (
    <div>
        <h1>CountPage</h1>
        <Count count={count} />
        {/* <p>{count}</p> */}
        <button onClick={addCount}>Tambah</button>

        {/* <Count/> */}

    </div>
  )
}
export default CountPage