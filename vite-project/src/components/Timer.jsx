import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeUp, isActive = true }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getTimerColor = () => {
    if (timeLeft <= 300) return "text-red-600 dark:text-red-400";
    if (timeLeft <= 600) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  return (
    <div
      className={`glass-card rounded-xl px-4 py-2 flex items-center gap-2 ${getTimerColor()}`}
    >
      <div className="text-2xl font-mono font-bold">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <span className="text-sm">remaining</span>
    </div>
  );
};

export default Timer;
