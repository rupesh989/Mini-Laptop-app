import React, { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import ShutDown from "./ShutDown";

// All screens from power on to shut down
const Screens = ({
  power,
  fingerScan,
  celebrate,
  handleCelebrate,
  handleShutDown,
  handleRestart,
  shuttingDown,
}) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [shutDown, setShutDown] = useState(false);

  useEffect(() => {
    if (power) {
      setFirst(true);
      setTimeout(() => {
        setSecond(true);
      }, 2000);
    } else {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setShutDown(false);
    }
  }, [power]);

  useEffect(() => {
    if (shuttingDown) {
      setShutDown(true);
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
    }
  }, [shuttingDown]);

  const handleClick = () => {
    setThird(true);
  };

