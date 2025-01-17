import React from "react";
import { useRouter } from "next/router";

const WelcomePage = () => {
    const router = useRouter();

  const handleStartGame = () => {
    router.push("/"); 
  };
  return (
    <div
  style={{
    padding: "20px",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    // backgroundImage: `url("/images/gameRule/background.png")`,
    backgroundColor:"red",
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    backgroundAttachment: "fixed",
  }}
>
      {/* Header */}
      {/* <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Welcome to <span style={{ color: "#ffcc00" }}>Command the TRIAD!</span>
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        Gear up for a futuristic challenge where strategy, teamwork, and speed lead to victory!
      </p> */}

      {/* Rules Section */}
      <div
  style={{
    maxWidth: "1026px",
    margin: "0 10px", // Center the container horizontally
    padding: "20px",
    borderRadius: "10px",
    backgroundImage: `url("/images/gameRule/rulebox.png")`,
    backgroundSize: "contain", // Ensures the entire image fits within the container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Full viewport height
    display: "flex", // Flexbox for alignment
    flexDirection: "column", // Stack items vertically
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    textAlign: "center", // Align text to the center
    color: "#fff", // Set text color
  }}
>
  <h2 style={{ marginBottom: "20px", marginTop: "10px" }}>Game Rules & Mechanics</h2>
  <ul
    style={{
      textAlign: "left", // Align list items to the left for readability
      fontSize: "1.2rem",
      lineHeight: "1.8",
      maxWidth: "600px", // Limit width for better readability
    }}
  >
    <li><strong>Tile Selection:</strong> Teams select tiles on their turn; tiles cannot be revisited.</li>
    <li><strong>Scoring:</strong> Complete challenges to earn meters; fail and earn none!</li>
    <li>
      <strong>Help Tokens:</strong> Use 6 futuristic tools: 
      <ul style={{ marginLeft: "20px" }}>
        <li>2 Power Surge: Hint Cards</li>
        <li>2 Tactical Override: Challenge Cards</li>
        <li>2 Quantum Reset: Second Chance Cards</li>
      </ul>
    </li>
    <li><strong>Leaderboard Tracking:</strong> Live updates on a futuristic race track leaderboard.</li>
    <li><strong>Victory Conditions:</strong> Highest meters win! Ties decided by role play performance.</li>
  </ul>
</div>

      {/* Play Game Button */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={handleStartGame}
          style={{
            background: "linear-gradient(to right, #ffcc00, #ff9900)",
            color: "#000",
            border: "none",
            padding: "15px 30px",
            fontSize: "1.5rem",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          Play Game
        </button>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "40px", fontSize: "1.2rem" }}>
        <em>Outthink, Outplay, Outrace – Will your team lead the TRIAD?</em>
      </div>
    </div>
  );
};

export default WelcomePage;
