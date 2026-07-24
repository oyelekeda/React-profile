import React from "react";
import ProfileCard from "./components/ProfileCard";
import Button from "./components/Button";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import AgeChecker from "./components/AgeChecker";
import LoginStatus from "./components/LoginStatus";
import OnlineStatus from "./components/OnlineStatus";

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
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="gold"
        />
      </ProfileCard>

      <ProfileCard
        name="Daniel"
        imageUrl="https://randomuser.me/api/portraits/men/2.jpg"
        role="Frontend Developer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="yellow"
        />
      </ProfileCard>

      <ProfileCard
        name="Sarah"
        imageUrl="https://randomuser.me/api/portraits/women/3.jpg"
        role="UI/UX Designer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="blue"
        />
      </ProfileCard>

      <ProfileCard
        name="Michael"
        imageUrl="https://randomuser.me/api/portraits/men/4.jpg"
        role="Backend Developer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="violet"
        />
      </ProfileCard>

      <ProfileCard
        name="Grace"
        imageUrl="https://randomuser.me/api/portraits/women/5.jpg"
        role="Data Analyst"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="tan"
        />
      </ProfileCard>

      <ProfileCard
        name="John"
        imageUrl="https://randomuser.me/api/portraits/men/6.jpg"
        role="Software Engineer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="orange"
        />
      </ProfileCard>

      <ProfileCard
        name="Esther"
        imageUrl="https://randomuser.me/api/portraits/women/7.jpg"
        role="Web Designer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="brown"
        />
      </ProfileCard>

      <ProfileCard
        name="David"
        imageUrl="https://randomuser.me/api/portraits/men/8.jpg"
        role="Full Stack Developer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="skyblue"
        />
      </ProfileCard>

      <ProfileCard
        name="Sophia"
        imageUrl="https://randomuser.me/api/portraits/women/9.jpg"
        role="Cybersecurity Student"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="blue"
        />
      </ProfileCard>

      <ProfileCard
        name="James"
        imageUrl="https://randomuser.me/api/portraits/men/10.jpg"
        role="Mobile App Developer"
      >
        <Button
          text="Follow"
          width="100px"
          height="40px"
          backgroundColor="red"
        />
      </ProfileCard>

      <Counter />

      <LikeButton/>

      <AgeChecker/>
      <LoginStatus/>
      <OnlineStatus/>
    </div>
  );
}

export default App;
