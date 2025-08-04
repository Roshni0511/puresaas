

import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Swal from "sweetalert2";


const Signin = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOtp] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (!/^\d*$/.test(value)) {
      setError("Only numbers are allowed.");
      return;
    } else {
      setError("");
    }

    setMobileNumber(value);

    // Validate Length
    if (value.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
    } else {
      setError("");
    }
  };

  const handleSendOTP = () => {
    if (mobileNumber.length === 10) {
      setShowOTPField(true);
    }
  };

 

  const closePopup = () => {
    setShowPopup(false);
    setMobileNumber("");  // Mobile number field clear
    setOtp("");           // OTP field clear
    setShowOTPField(false); // Hide OTP field
  };
  const handleOtpChange = (e) => {
    const value = e.target.value;
  
    // Allow only numbers
    if (!/^\d*$/.test(value)) {
      return;
    }
  
    setOtp(value);
  };
  const slides = [
    {
      image: "/dark/assets/imgs/icon-img/logn1.png",
      title: "OTP Security",
      text: "Secure online accounts with OTP. Back up OTP secrets and never lose access to your accounts.",
    },
    {
      image: "/dark/assets/imgs/icon-img/logn2.png",
      title: "Passwordless sign-in",
      text: "Move away from risky passwords and experience one-tap access to puresaas. Download and install OneAuth.",
    },
  ];
  const handleSubmit = () => {
    if (otp.length === 6) {
      // Show SweetAlert only if OTP is valid
      Swal.fire({
        title: "Success!",
        text: " Your sign-in is completed!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Reset fields after closing the alert
        setMobileNumber("");
        setOtp("");
        setShowOTPField(false);
      });
    } else {
      // Optionally, show an error alert if OTP is invalid
      Swal.fire({
        title: "Error",
        text: "Please enter a valid OTP.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <div className="container Unieuqq">
      <div className="login-boxxxx">
        <div className="login-leftt">
          <h3 style={{ fontSize: "25px", color: "#000" }}>Sign in</h3>
          <p className="subtitlees">to access Puresaas</p>

          {/* Mobile Number Input */}
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="inputess"
            value={mobileNumber}
            onChange={handleMobileChange}
            maxLength="10"
            style={{
              padding: "8px",
              width: "406px",
              display: "block",
              marginBottom: "5px",
              border: error ? "2px solid red" : "1px solid #ccc",
            }}
          />
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          {/* SEND OTP Button */}
          {!showOTPField && (
            <button
              className="buttonnnnn"
              style={{
                background: mobileNumber.length === 10 ? "#000" : "#ccc",
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                cursor: mobileNumber.length === 10 ? "pointer" : "not-allowed",
              }}
              disabled={mobileNumber.length !== 10}
              onClick={handleSendOTP}
            >
              SEND OTP
            </button>
          )}

          {/* OTP Field & Submit Button */}
          {showOTPField && (
            <div style={{ marginTop: "10px" }}>
             <input
  type="text"
  placeholder="Enter OTP"
  value={otp}
  onChange={handleOtpChange}
  maxLength="6"
  style={{
    padding: "8px",
    width: "406px",
    display: "block",
    marginBottom: "10px",
    border: otp.length === 6 ? "1px solid #ccc" : "2px solid red",
  }}
/>
              <button
                className="submit-btn"
                style={{
                  background: otp.length === 6 ? "#000" : "#ccc",
                  color: "#fff",
                  padding: "8px 15px",
                  border: "none",
                  cursor: otp.length === 6 ? "pointer" : "not-allowed",
                  width: "406px",
                }}
                disabled={otp.length !== 6}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}

          {/* Popup Modal */}
          {showPopup && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                }}
              >
               
                <button
                  style={{
                    marginTop: "10px",
                    padding: "8px 15px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={closePopup}
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {/* Social Login */}
          <div className="social-iconss d-flex justify-content-center">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                padding: "0",
                justifyContent: "center",
                margin: "30px 0px 0px 0px",
              }}
            >
              {[
                { icon: <FacebookIcon />, color: "#4969a8" },
                { icon: <InstagramIcon />, color: "#e8715c" },
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    border: "1px solid #6b7499",
                    borderRadius: "100%",
                    margin: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "55px",
                    height: "55px",
                  }}
                >
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {React.cloneElement(item.icon, { style: { color: item.color, fontSize: "36px" } })}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="signupes">
            Don't have an account? <a href="/signup">Sign up now</a>
          </p>
        </div>

        {/* Right-side Slideshow */}
        <div className="login-rightt">
          <img src={slides[currentIndex].image} alt="MFA Illustration" className="slide-imgess" />
          <h5 className="slide-title">{slides[currentIndex].title}</h5>
          <p className="slide-textes">{slides[currentIndex].text}</p>
          <div className="slider-dotss">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
