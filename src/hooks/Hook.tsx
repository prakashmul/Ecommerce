import React, { useState } from 'react'

const ReactHook = () => {
  //useState
  const [count, setCount] = useState(0);

  const onCount1 = () => {
    setCount(count + 1)
  }

  const onCount2 = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={onCount1}
        className='border bg-black text-white px-5 py-2'>Increase</button>

      <button
        onClick={onCount2}
        className='border bg-black text-white px-5 py-2'>Decrease</button>
    </div>
  )
}

export default ReactHook