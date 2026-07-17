import React from 'react'


function Button({ text, width, height, backgroundColor }) {
  return (
    <button
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
    
  );
}

export default Button;