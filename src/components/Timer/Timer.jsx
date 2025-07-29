import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  function toggleTimer() {
    setRunning((prev) => !prev);
  }

  function resetTimer() {
    setSeconds(0);
    setRunning(false);
  }

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={toggleTimer}>
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      </div>
      );
}