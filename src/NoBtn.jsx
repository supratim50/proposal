import React, { useState } from 'react'

const NoBtn = () => {

    const [move, setMove] = useState(true);

  return (
    <div onClick={() => setMove(prev => !move)} className={`px-6 rounded-lg py-2 shadow-md bg-white absolute ${move ? 'top-[15%] left-[37%]' : 'top-[80%] left-[24%]'}`}>
        No
      </div>
  )
}

export default NoBtn