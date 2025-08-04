import React from "react";
import { Helmet } from "react-helmet";
import respoImage from "../../../Image/responsibility.png"; // Adjust the relative path as needed
import respoImage2 from "../../../Image/respo2.png";

export default function Responsibility() {
  return (
    <>
      <Helmet>
        <title>puresaas</title>
      </Helmet>
      <section
        style={{
          backgroundImage: `url(${respoImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          marginBottom: "60px",
        }}
      >
        {/* Main Content */}
        <div className="container content">
          <h3
            style={{
              fontSize: "2.5rem", // Base font size for large screens
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Your privacy is our responsibility
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <button style={{ fontSize: "1rem", padding: "10px 20px" }}>
             <a href="/contactus">Get Started</a> 
            </button>
            <button style={{ fontSize: "1rem", padding: "10px 20px" }}>
              <a href="/Enterprise">Know More</a>
            </button>
          </div>
        </div>

        {/* Second Image */}
        <div
          style={{
            backgroundImage: `url(${respoImage2})`,
            backgroundSize: "auto",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundPosition: "bottom left",
            bottom: 0,
            left: 0,
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
      </section>
    </>
  );
}
