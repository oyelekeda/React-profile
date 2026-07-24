import React, { useState } from 'react'

const AgeChecker = () => {
    const [Age, setAge] = useState(57)
  return (
    <div>
      <h2>Age: {Age}</h2>
      <p>{Age >= 18 ? "Adult":"Minor"}</p>
       <button onClick={() => setAge(Age + 1)}>
        Increase Age
      </button>
       <button onClick={() => setAge(Age - 1)}>
        Decrease Age
      </button>
    </div>
  )
}

export default AgeChecker
