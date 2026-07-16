import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <ProfileCard
        name="Ayoola"
        imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
        role="Aspiring React Developer"
      />

      <ProfileCard
        name="Daniel"
        imageUrl="https://randomuser.me/api/portraits/men/2.jpg"
        role="Frontend Developer"
      />

      <ProfileCard
        name="Sarah"
        imageUrl="https://randomuser.me/api/portraits/women/3.jpg"
        role="UI/UX Designer"
      />

      <ProfileCard
        name="Michael"
        imageUrl="https://randomuser.me/api/portraits/men/4.jpg"
        role="Backend Developer"
      />

      <ProfileCard
        name="Grace"
        imageUrl="https://randomuser.me/api/portraits/women/5.jpg"
        role="Data Analyst"
      />

      <ProfileCard
        name="John"
        imageUrl="https://randomuser.me/api/portraits/men/6.jpg"
        role="Software Engineer"
      />

      <ProfileCard
        name="Esther"
        imageUrl="https://randomuser.me/api/portraits/women/7.jpg"
        role="Web Designer"
      />

      <ProfileCard
        name="David"
        imageUrl="https://randomuser.me/api/portraits/men/8.jpg"
        role="Full Stack Developer"
      />

      <ProfileCard
        name="Sophia"
        imageUrl="https://randomuser.me/api/portraits/women/9.jpg"
        role="Cybersecurity Student"
      />

      <ProfileCard
        name="James"
        imageUrl="https://randomuser.me/api/portraits/men/10.jpg"
        role="Mobile App Developer"
      />
    </div>
  );
}

export default App;