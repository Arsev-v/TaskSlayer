import { useState } from "react";

function App() {
  /* =========================
     PLAYER STATE (Stats)
  ========================== */
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [xpToNextLevel, setXpToNextLevel] = useState(100);

  const XP_GAIN = 50; // XP per quest

  /* =========================
     GAME LOGIC
  ========================== */
  const gainXP = () => {
    const newXp = xp + XP_GAIN;

    if (newXp >= xpToNextLevel) {
      levelUp();
    } else {
      setXp(newXp);
    }
  };

  const levelUp = () => {
    setLevel((prev) => prev + 1);
    setXp(0);
    setXpToNextLevel((prev) => Math.floor(prev * 1.5));
  };

  /* =========================
     UI
  ========================== */
  return (
    <div style={styles.container}>
      <h1>RPG Task Slayer ⚔️</h1>
      <h2>Level: {level}</h2>

      <p>
        Experience: {xp} / {xpToNextLevel}
      </p>

      <progress
        value={xp}
        max={xpToNextLevel}
        style={styles.progress}
      />

      <br />
      <br />

      <button onClick={gainXP}>
        Complete Fitness Goal (+{XP_GAIN} XP)
      </button>
    </div>
  );
}

/* =========================
   STYLES (Separated Cleanly)
========================== */
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    padding: "20px",
  },
  progress: {
    width: "200px",
    height: "20px",
  },
};

export default App;
