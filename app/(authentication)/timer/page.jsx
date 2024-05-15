"use client";

import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
const TimerPage = () => {
  // 用于记录定时器的id
  const [timer, setTimer] = useState(null);
  // 用于记录秒数状态，1,2,3...
  const [time, setTime] = useState(0);

  const startTimer = () => {
    setTimer(setInterval(() => {
      // 假设每隔1s加一
      setTime(prevTime => prevTime + 1);
    }, 1000));
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <>
      <div>时间: {time} 秒</div>
      <Button onClick={startTimer} variant="contained">
        开始
      </Button>
      <Button onClick={stopTimer} variant="contained">
        停止
      </Button>
      <Button onClick={resetTimer} variant="contained">
        重置
      </Button>
    </>
  );
};

export default TimerPage;