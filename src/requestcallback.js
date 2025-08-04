
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Swal from "sweetalert2";
import LoadingScreen from "./components/dark/common/loader";
import Cursor from "./components/dark/common/cusor";
import ProgressScroll from "./components/dark/common/ProgressScroll";
import Lines from "./components/dark/common/Lines";
import Navbar from "./components/dark/creative-agency/Navbar";
import { MdLocationCity } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles
import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import Footer from "./components/dark/home-main/Footer";
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';

import { useLocation } from "react-router-dom"; // ✅ Correct way for React.js (React Router)

export default function Requestcallbackes() {

      const location = useLocation(); // ✅ Get current URL
      const searchParams = new URLSearchParams(location.search); // ✅ Read query parameters
      const productName = searchParams.get("product") || ""; // ✅ Get product name from URL
      const [productname, setName] = useState(productName); // ✅ Set product name in input
    
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/dark/assets/js/scripts.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    city: "",
    state: "",
    team_help: "",
  });

  const [captchaCode, setCaptchaCode] = useState(""); // Store CAPTCHA code
  const [captchaInput, setCaptchaInput] = useState(""); // Store user CAPTCHA input
  const canvasRef = useRef(null); // Reference to the canvas element

  // Handle input change for form fields
  const handleInputChange = (event) => {

    const { name, value } = event.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }

    if (name === "city" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }
    if (name === "state" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }
    if (name === "contact_number" && !/^[0-9]{0,10}$/.test(value)) {
      return; // Allow only digits up to 10
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Handle CAPTCHA input change
  const handleCaptchaChange = (event) => {
    setCaptchaInput(event.target.value);
  };

  // Generate CAPTCHA function
  const generateCaptcha = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Define character pool and settings
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    const charCount = 6;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Generate CAPTCHA characters
    for (let i = 0; i < charCount; i++) {
      const char = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      captchaText += char;

      // Random font size
      const fontSize = 20 + Math.random() * 10;
      context.font = `${fontSize}px Arial`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Random color
      context.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      // Random rotation
      const rotation = (Math.random() - 0.5) * 20;
      context.save();
      context.translate(20 + i * 30, canvasHeight / 2);
      context.rotate((rotation * Math.PI) / 180);
      context.fillText(char, 0, 0);
      context.restore();
    }

    // Set the generated CAPTCHA code to state
    setCaptchaCode(captchaText);
  };

  // Handle form submission
  const handleSubmit = async (event) => { // Add async here
    event.preventDefault();

    // Validate CAPTCHA
    if (captchaInput !== captchaCode) {
      Swal.fire({
        icon: "error",
        title: "Invalid CAPTCHA",
        text: "Please try again.",
        confirmButtonColor: "#808080",
      });
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/request_call";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact_number: formData.contact_number,
          city: formData.city,
          state: formData.state,
          team_help: formData.team_help,
          product_name: productname, 
          // Include other necessary fields
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);

        // Display SweetAlert success message
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for contacting us! Our team will contact you as soon as possible.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: "#808080",
        }).then((result) => {
          // Check if the user clicked 'OK'
          if (result.isConfirmed) {
            // Refresh the page after the user clicks 'OK'
            window.location.reload();
          }
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
        // Handle API errors here (e.g., show an error message)
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Request Submitted!",
      text: "Thank you for your inquiry!",
      confirmButtonText: "OK",
      confirmButtonColor: "#808080",
    });

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      contact_number: "",
      city: "",
      state: "",
      team_help: "",
    });

    setCaptchaInput("");
    generateCaptcha();
  };


  useEffect(() => {
    generateCaptcha();
  }, []);
  return (
    <>
      <Helmet>
        <title>Puresaas</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/dark/assets/css/satoshi.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap" />
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Start_exploring />
                                              <Whatsapp/>
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <div
                className="header page-header bg-img section-padding"
                data-background="/dark/assets/imgs/header/bg1.jpg"
                data-overlay-dark="9"
              >
                <div className="container pt-100 ontop">
                  <div className="text-center">
                    <h1 style={{ fontSize: "45px" }}>Request a Callback</h1>
                    <div className="mt-15">
                      <a href="/">Home</a>
                      <span className="padding-rl-20">|</span>
                      <span className="main-color">Request a Callback </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            
            <section className="contact section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h2 style={{ fontSize: "39px" }}>Request a Callback</h2>
                    <p>
                      Curious about Puresaas CRM ? Fill out the form, and our team will give you a call to explore how Puresaas CRM can meet your specific business needs.
                    </p>
                  </div>
                  <div className="col-lg-7 offset-lg-1 valign">
                    <div
                      className="full-width"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                      }}
                    >
                      <form onSubmit={handleSubmit} >
                        <div className="controls row">
                          <div className="col-lg-12" style={{ position: "relative" }}>
                          {/* <input type="text" value={productname} name="productname" readOnly style={{ display: "block", textAlign: "center", marginBottom: "10px" }}/> ✅ Read-only field */}

                            <div className="form-group mb-30">
                              <label
                                htmlFor="form_name"
                                style={{ marginBottom: "15px" }}
                              >
                                Name: *
                              </label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "52%",
                                right: "38px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                document.getElementById("form_name").focus()
                              }
                            >
                              <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                            </div>
                          </div>

                          <div className="col-lg-12" style={{ position: "relative" }}>
                            <div className="form-group mb-30">
                              <label
                                htmlFor="email"
                                style={{ marginBottom: "15px" }}
                              >
                                Email Address: *
                              </label>
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: "52%",
                                right: "38px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("form_email").focus()}
                            >
                              <MdOutlineMail size={20} color="#555" />
                            </div>
                          </div>
                         
                          {/* <div className="col-lg-12" style={{ position: "relative" }}>
                            <div className="form-group mb-30">
                              <label htmlFor="number" style={{ color: "#fff", marginBottom: "15px" }}>
                                Phone Number:
                              </label>
                              <PhoneInput
                                country={"in"} 
                                value={formData.contact_number} 
                                onChange={(phone, country) =>
                                  handleInputChange({
                                    target: {
                                      name: "contact_number",
                                      value: phone,
                                      country: country.iso2,
                                    },
                                  })
                                }
                                enableSearch={true} 
                                inputProps={{
                                  id: "number",
                                  name: "number",
                                  required: true,
                                  className: "form-control",
                                }}
                                containerStyle={{ width: "100%", marginBottom: "16px" }} 
                                inputStyle={{
                              
                                  paddingBottom: "26px",
                                  paddingTop: "26px",
                                  paddingLeft: "50px", 
                                  width: "100%",
                                  border: "1px solid rgba(255, 255, 255, 0.2)",
                                  borderRadius: "5px",
                                  background: "transparent",
                                  color: "#fff",
                                 
                                  transition: "all 0.4s ease",
                                }}
                                dropdownStyle={{
                                  backgroundColor: "#fff",
                                  color: "#000", 
                                  width: "250px"
                                }}
                                searchStyle={{
                                  backgroundColor: "#fff", 
                                  color: "#000", 
                                  border: "1px solid #ccc", 
                                  padding: "5px",
                                }}
                                onFocus={(e) => {
                                  e.target.style.border = "1px solid #fff";
                                  e.target.style.boxShadow = "none"; 
                                }}
                                onBlur={(e) => {
                                  e.target.style.border =
                                    "1px solid rgba(255, 255, 255, 0.2)"; 
                                }}
                              />
                            </div>
                        

                            <div
                              style={{
                                position: "absolute",
                                top: "52%",
                                right: "38px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() => document.getElementById("number").focus()}
                            >
                              <MdPhone size={20} color="#555" />
                            </div>
                          </div> */}

<div className="col-lg-12" style={{ position: "relative" }}>
  <div className="form-group mb-30">
    <label style={{ marginBottom: "15px" }}>Phone Number: *</label>
    
    <input
    id="from_phone"
      type="text"
      name="number"
      value={formData.contact_number}
      onChange={(e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
        if (newValue.length <= 10) { // Limit to 10 digits
          setFormData({ ...formData, contact_number: newValue });
        }
      }}
      required   />
  </div>

  <div
    style={{
      position: "absolute",
      top: "52%",
      right: "38px",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={() => document.getElementById("from_phone")?.focus()}
  >
    <MdPhone size={20} color="#555" />
  </div>
</div>




                          <div className="col-12">
                            <div className="form-group mb-30" style={{ position: "relative" }}>
                              <label
                                htmlFor="subject"
                                style={{ marginBottom: "15px" }}
                              >
                                City: *
                              </label>
                              <input
                                id="form_subject"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: "68%",
                                  right: "28px",
                                  transform: "translateY(-50%)",
                                  cursor: "pointer",
                                }}
                                onClick={() => document.getElementById("form_subject").focus()}
                              >
                                <MdLocationCity size={20} color="#555" />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group mb-30" style={{ position: "relative" }}>
                              <label
                                htmlFor="state"
                                style={{ marginBottom: "15px" }}
                              >
                                State/Region: *
                              </label>
                              <input
                                id="form_subject1"
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: "68%",
                                  right: "28px",
                                  transform: "translateY(-50%)",
                                  cursor: "pointer",
                                }}
                                onClick={() => document.getElementById("form_subject1").focus()}
                              >
                                <MdLocationOn size={20} color="#555" />
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-30" style={{ position: "relative" }}>
                              <label
                                htmlFor="companyname"
                                style={{ marginBottom: "15px" }}
                              >
                                How can our team help you? *
                              </label>
                              <input
                                id="form_name1"
                                type="text"
                                name="team_help"
                                value={formData.team_help}
                                onChange={handleInputChange}
                                required
                              />
                               <div
                                style={{
                                  position: "absolute",
                                  top: "68%",
                                  right: "28px",
                                  transform: "translateY(-50%)",
                                  cursor: "pointer",
                                }}
                                onClick={() => document.getElementById("form_name1").focus()}
                              >
                                <MdHelpOutline  size={20} color="#555" />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">



                            <div className="mb-3 d-flex align-items-center">
                              <canvas
                                id="captcha"
                                width="200"
                                height="80"
                                ref={canvasRef}
                              ></canvas>
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={generateCaptcha}
                              >
                                <i className="fa fa-refresh"></i>
                              </button>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="captcha-input"
                                className="form-label"
                              >
                                Enter CAPTCHA
                              </label>
                              <input
                                type="text"
                              
                                id="captcha-input"
                                value={captchaInput}
                                onChange={handleCaptchaChange}
                                required
                              />
                            </div>
                            <div>By submitting this form, you agree to the processing of personal data according to our
                              <a href="/dark/privacy"> Privacy Policy.</a></div>
                            <div
                              className="mt-30"
                              style={{
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              <button
                                type="submit"
                                className="butn butn-full butn-bord radius-30 "
                                // style={{ padding: '10px 0' }}
                              >
                                <span className="text">Submit Request</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}