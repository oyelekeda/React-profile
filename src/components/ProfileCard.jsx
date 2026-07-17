import React from "react";
import Button from "./Button";

function ProfileCard({ name, imageUrl, role, children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <h2>{name}</h2>
      <p>{role}</p>

         {children}

    </div>
  );
}

export default ProfileCard;