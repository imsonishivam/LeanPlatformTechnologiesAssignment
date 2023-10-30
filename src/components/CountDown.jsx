import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountDown = () => {
  const [seconds, setSeconds] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/redirect-page");
  };

  useEffect(() => {
    let timer = setInterval(() => {
      navigate("/redirect-page");
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    let timer;
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      setIsOpen(true);
      //   navigate("/redirect-page");
      console.log("timeup");
    } else {
      timer = setInterval(() => {
        if (seconds === 0 && minutes === 0) clearInterval(timer);
        else if (seconds === 0) {
          setMinutes((prevMinute) => prevMinute - 1);
          setSeconds(59);
        } else setSeconds((prevSecond) => prevSecond - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [minutes, navigate, seconds]);

  return (
    <div className="countdown">
      <div className="for-minutes">
        <p>{minutes.toString().padStart(2, "0")} </p>
        <span>Minutes</span>
      </div>
      <div>:</div>
      <div className="for-seconds">
        <p>{seconds.toString().padStart(2, "0")} </p>
        <span>Seconds</span>
      </div>

      {isOpen && (
        <div className="model-background">
          <div class="blob blob1"></div>
          <div class="blob blob2"></div>
          <nav
            style={{
              fontSize: "1rem",
            }}
          >
            THE <span>PRODUCT</span> PLATFORM
          </nav>
          <div className="model">
            <h1>We are Live Now!</h1>
            <p>
              Our new feature is now live and ready for you to explore. Go ahead
              and give it a try
            </p>
            <button onClick={(e) => handleClick()}>Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDown;
