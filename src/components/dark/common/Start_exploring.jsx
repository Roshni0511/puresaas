"use client";
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Correct for React.js (React Router)

export default function Start_exploring() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get the current page path

  // Normalize the path (remove trailing slash & convert to lowercase)
  const normalizedPath = location.pathname.replace(/\/$/, "").toLowerCase();

  // Map URLs to corresponding PDF files (keys also converted to lowercase)
  const menuPdfLinks = {
    "/realestateagentcrm": "/Realestateagentcrm.pdf",
    "/realestatecrm": "/Realestatecrm.pdf",
    "/salescrm": "/Salescrm.pdf",
    "/servicecrm": "/Servicecrm.pdf",
    "/b2bcrm": "/B2bcrm.pdf",
    "/telecallercrm": "/Telecallercrm.pdf",
    "/ats": "/ATS.pdf",
    "/payrollsystem": "/PayrollSystem.pdf",
    "/officeerp": "/Officeerp.pdf",
  };

  // Define allowed pages with correct display names
  const allowedPages = {
    "/realestateagentcrm": "Real Estate Agent CRM",
    "/realestatecrm": "Real Estate CRM",
    "/salescrm": "Sales CRM",
    "/servicecrm": "Service CRM",
    "/b2bcrm": "B2B Textile ERP",
    "/telecallercrm": "Telecaller CRM",
    "/ats": "ATS (Application Tracking System)",
    "/payrollsystem": "payroll System",
    "/officeerp": "Office ERP",
  };

  // Get the correct PDF URL based on the current page
  const pdfUrl = menuPdfLinks[normalizedPath] || "/puresaas.pdf";

  // Get the correct product name from allowedPages, else fallback to "Unknown Product"
  const productName = allowedPages[normalizedPath] ? allowedPages[normalizedPath] : null;


  return (
    <div> 
      {/* Main Button - Hidden when isOpen is true */}
      {!isOpen && (
        <h1
          style={{
            color: "#fff",
            fontSize: "16px",
            background: "rgb(64 64 64)",
            padding: "13px 13px",
            borderRadius: "8px",
            position: "fixed",
            right: "-35px",
            top: "60%",
            zIndex: 1000,
            transform: "rotate(-90deg) translate(50%, 0)",
            cursor: "pointer",
            transition: "all ease-in-out .4s",
          }}
          onClick={() => setIsOpen(true)}
        >
          START EXPLORING
        </h1>
      )}

      {/* Hidden Div */}
      {isOpen && (
        <div
          style={{
            color: "#fff",
            fontSize: "16px",
            background: "rgb(64 64 64)",
            padding: "13px 13px",
            borderRadius: "8px",
            position: "fixed",
            right: "45px",
            top: "40%",
            zIndex: 999,
            cursor: "pointer",
            transition: "all ease-in-out .4s",
          }}
        >
          <h1
            style={{
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "end",
            }}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </h1>

          {/* Open PDF in a New Tab */}
          <h1 style={{ fontSize: "18px" }}>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Download Brochure
            </a>
          </h1>

          <h1 style={{ fontSize: "18px" }}>
            <a href="/signup">Sign Up</a>
          </h1>
          

<h1 style={{ fontSize: "18px" }}>
  <a href={productName ? `/bookdemo?product=${encodeURIComponent(productName)}` : "/bookdemo"}>
    Schedule a Demo
  </a>
</h1>

<h1 style={{ fontSize: "18px" }}>
  <a href={productName ? `/Requestquote?product=${encodeURIComponent(productName)}` : "/Requestquote"}>
    Request a Price Quote
  </a>
</h1>

<h1 style={{ fontSize: "18px" }}>
  <a href={productName ? `/Requestcallback?product=${encodeURIComponent(productName)}` : "/Requestcallback"}>
    Request a Callback
  </a>
</h1>

          {/* <h1 style={{ fontSize: "18px" }}>
            <a href={`/bookdemo?product=${encodeURIComponent(productName)}`}>
              Schedule a Demo
            </a>
          </h1> */}

          {/* <h1 style={{ fontSize: "18px" }}>
            <a href={`/Requestquote?product=${encodeURIComponent(productName)}`}>
              Request a Price Quote
            </a>
          </h1>

          <h1 style={{ fontSize: "18px" }}>
            <a href={`/Requestcallback?product=${encodeURIComponent(productName)}`}>
              Request a Callback
            </a>
          </h1> */}
        </div>
      )}
    </div>
  );
}
