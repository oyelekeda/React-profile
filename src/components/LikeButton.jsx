import React, { useState } from 'react'

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
     <p>{likes === 0 ? "This is the first person" : `Person`}</p>

     
      <button onClick={() => setLikes(likes + 1)}>
        👍 Like {likes}
      </button>
      
    </div>
  )
}

export default LikeButton


