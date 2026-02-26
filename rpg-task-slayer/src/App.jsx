import { useState} from 'react'

function App () {
  // 1. This is "State" - Think of it as the Player's Stats
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [xpToNextLevel, setXpToNextLevel] = useState(100)

  // 2. This is a "Function" - This is a Game Rule
  const gainXP = () => {
    const xpGain = 50; // How much you get per quest
    const newXp = xp + xpGain;

    // 3. Check against the dynamic variable instead of "100"
    if (newXp >= xpToNextLevel){
      setLevel(level + 1);
      setXp(0);
      // 4. Scaling Formula: Make the next level 50% harder
      setXpToNextLevel(Math.floor(xpToNextLevel * 1.5));
    } else {
      setXp(newXp);
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '20px'}}>
      <h1>RPG Task Slayer ⚔️</h1>
      <h2>Level: {level}</h2>

      {/* 5. Display the dynamic target */}
      <p>Experience: {xp} / {xpToNextLevel}</p>

      <progress value={xp} max={xpToNextLevel} style={{width: '200px', height: '20px'}}></progress>
      <br /><br />

      {/* 3. The Button - Our first interation */}
      <button onClick={gainXP}>
        Complete Fitness Goal ( +{50} XP )
      </button>
    </div>
  );
}

// Quest inputs


export default App;
