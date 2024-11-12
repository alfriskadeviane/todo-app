import React from 'react'

function Count({count})  {
  const colorEven = count%2 ==0 ? {color:'green'} : {color:'red'} ;
  return (
    <div >
      <h3 style={colorEven}>COUNT: {count}</h3>
      {/* <button className='btn'onClick={() => setCount((count) => count + 1)}>Tamvbah</button> */}

    </div>
   
  )
}

export default Count