import React from 'react'
import phoneimg from '../../../Image/affi2.png'
export default function AffiliateProgram() {
    return (
        <div style={{ margin: "60px 0px" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5
                style={{
                  fontSize: "1.5rem", // Base font size for large screens
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Affiliate Program
              </h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2
                style={{
                  fontSize: "2.5rem", // Base font size for large screens
                  textAlign: "center",
                }}
              >
                WHAT IS AFFILIATE
              </h2>
            </div>
          </div>
            <div className="container">
            <div
            style={{
              backgroundImage: `url(${phoneimg})`,
              backgroundSize: "auto",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "400px",
              maxWidth:'100%',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              margin: "60px 0px",
            }}
          ></div>
            </div>
        </div>
      );
}
