import React from "react";
import net from "../../../Image/compressed_network.png";
export default function Network() {
  return (
    <div style={{ margin: "60px 0px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h5 className="fw-600 d-rotate wow"
            style={{
              fontSize: "1.5rem", // Base font size for large screens
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <span className="rotate-text ">World-class Customise CRM With Premium Connectivity.</span>
          </h5>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h5
            style={{
              // fontSize: "2rem", 
              padding:"25px",
              textAlign: "center",
            }}
          >
            PURESAAS NETWORK
          </h5>
          
        </div>
      </div>
      <div
        // style={{
        //   backgroundImage: `url(${net})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   height: "580px",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   position: "relative",
        //   zIndex: 1,
        //   margin: "60px 0px",
        // }}
      >
      <img src={net} alt="network" />
      </div>
    </div>
  );
}
