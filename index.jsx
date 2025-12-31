const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);

  const [OTP, setOTP] = useState(null);

  const passcodeGen = () => {
    let password = "";
    for (let i = 1; i <= 6; i++) {
      password += Math.floor(Math.random() * 10);
    }
    setOTP(password);
  };

  useEffect(() => {
    if (OTP) {
      h2Ref.current.innerText = `${OTP}`;
      buttonRef.current.disabled = true;
      pRef.current.innerText = "Expires in: 5 seconds";
      setTimeout(() => {
        pRef.current.innerText = "Expires in: 4 seconds";
      }, 1000);
      setTimeout(() => {
        pRef.current.innerText = "Expires in: 3 seconds";
      }, 2000);
      setTimeout(() => {
        pRef.current.innerText = "Expires in: 2 seconds";
      }, 3000);
      setTimeout(() => {
        pRef.current.innerText = "Expires in: 1 seconds";
      }, 4000);
      setTimeout(() => {
        pRef.current.innerText = "OTP expired. Click the button to generate a new OTP.";
        buttonRef.current.disabled = false;
      }, 5000);
    }
  }, [OTP]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display" ref={h2Ref}>
        Click 'Generate OTP' to get a code
      </h2>
      <p id="otp-timer" ref={pRef} aria-live="assertive"></p>
      <button id="generate-otp-button" ref={buttonRef} onClick={passcodeGen}>
        Generate OTP
      </button>
    </div>
  );
};