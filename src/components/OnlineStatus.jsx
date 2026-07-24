import { useState } from "react";

function OnlineStatus() {
  const [online, setOnline] = useState(false);

  return (
    <div>
      <h2>
        {online ? "🟢 Online" : "🔴 Offline"}
      </h2>

      <button onClick={() => setOnline(!online)}>
        {online ? "Go Offline" : "Go Online"}
      </button>
    </div>
  );
}

export default OnlineStatus;