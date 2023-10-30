import React, { useState } from "react";
import { BsRocket } from "react-icons/bs";
import GetNotify from "./GetNotify";
import CountDown from "./CountDown";

const Header = () => {
  const [data, setData] = useState(false);
  const handleSetData = (e) => {
    setData(e);
  };
  return (
    <div className="header">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <nav>
        THE <span>PRODUCT</span> PLATFORM
      </nav>
      <div className="content">
        <div>
          <BsRocket />
          <h1>Launching New Module Soon!</h1>
        </div>
        <p>
          Exciting things are in the works! We're currently
          <span> Creating a new features </span> for you. Keep an eye out for
          updates - We're working to make it available soon!
        </p>
        <h2>GET READY FOR THE REVEAL!</h2>

        {data ? <CountDown /> : ""}

        <GetNotify handleSetData={handleSetData} />
      </div>
    </div>
  );
};

export default Header;
