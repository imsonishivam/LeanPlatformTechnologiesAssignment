import React, { useState } from "react";
const GetNotify = ({ handleSetData }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendData = (valid) => {
    handleSetData(valid);
  };

  const emailValidation = () => {
    setIsLoading(true);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setTimeout(() => {
      if (email.match(emailRegex)) {
        setIsValidEmail(true);
        sendData(true);
        setMessage("");
      } else {
        setMessage("invalid email");
        setIsValidEmail(false);
      }
      setIsLoading(false);
    }, 2000);
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
      );
    } else if (isValidEmail) return <span>&#10003;</span>;
    else return "Notify Us";
  };

  return (
    <div className="get-notify">
      <p>
        {!isValidEmail
          ? `Be the first to know! Share your email and We'll notify you when it's
            live`
          : `You're all set! You'll be the first to know when we're live.`}
      </p>
      <div className="valid-email-section">
        <input
          type="email"
          name=""
          id="email"
          className="input-control"
          placeholder="xyz@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValidEmail(null);
          }}
          autoComplete="off"
          required
        />
        <button
          onClick={emailValidation}
          disabled={!email || isValidEmail === false}
        >
          {renderButtonContent()}
        </button>
      </div>
      <span className="text-message">{message}</span>
    </div>
  );
};

export default GetNotify;
