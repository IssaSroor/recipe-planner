import React, { useRef, useState, useEffect } from "react";
import styles from './Timer.module.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>{time}s</div>
      <button className={styles.button} onClick={startTimer}>
        Start
      </button>
      <button className={styles.button} onClick={stopTimer}>
        Stop
      </button>
      <button className={styles.button} onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
