import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Footer from "../../components/dark/home-main/Footer";
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Bookcontact from '../../components/dark/home-main/Bookcontact';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import Swal from "sweetalert2";
export default function Requestquote() {
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
    num_of_user: "",
    name: "",
    contact_number: "",
    email: "",
    city: "",
    state: "",
    company_name: "",
    comments: "",
  });

  const [captchaCode, setCaptchaCode] = useState(""); // Store CAPTCHA code
  const [captchaInput, setCaptchaInput] = useState(""); // Store user CAPTCHA input
  const canvasRef = useRef(null); // Reference to the canvas element

  // Handle input change for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }
    if (name === "num_of_user" && !/^[0-9]{0,10}$/.test(value)) {
      return; // Allow only digits up to 10
    }
    if (name === "contact_number" && !/^[0-9]{0,10}$/.test(value)) {
      return; // Allow only digits up to 10
    }
    if (name === "city") {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }
    if (name === "state") {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }
    if (name === "company_name") {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
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
  const handleSubmit = async (event) => {  // Add async here
    event.preventDefault();
    
    // Validate CAPTCHA
    if (captchaInput !== captchaCode) {
      Swal.fire({
        icon: "error",
        title: "Invalid CAPTCHA",
        text: "Please try again.",
      });
      generateCaptcha(); // Regenerate CAPTCHA if invalid
      setCaptchaInput(""); // Clear CAPTCHA input field
      return;
    }
  
    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/price_quote";
    
    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          num_of_user: formData.num_of_user,
          name: formData.name,
          contact_number: formData.contact_number,
          email: formData.email,
          city: formData.city,
          state: formData.state,
          company_name: formData.company_name,
          comments: formData.comments,
        }),
      });
    
      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);
      
        // Display SweetAlert success message
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for contacting us! Our Team will contact you as soon as possible.',
          icon: 'success',
          confirmButtonText: 'OK'
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
  
    // Log form data to console (you can send this data to your server)
    console.log("num_of_user:", formData.num_of_user);
    console.log("name:", formData.name);
    console.log("contact_number:", formData.contact_number);
    console.log("email:", formData.email);
    console.log("city:", formData.city);
    console.log("state:", formData.state);
    console.log("company_name:", formData.company_name);
    console.log("comments:", formData.comments);
  
    // Show SweetAlert success message
    Swal.fire({
      icon: "success",
      title: "Form Submitted Successfully!",
      text: "Thank you for Inquiry !",
    });
  
    // Reset form data after submission
    setFormData({
      num_of_user: "",
      name: "",
      contact_number: "",
      email: "",
      city: "",
      state: "",
      company_name: "",
      comments: "",
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
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
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
                    <h1 style={{ fontSize: "45px" }}>Get a price quote</h1>
                    <div className="mt-15">
                      <a href="/">Home </a>
                      <span className="padding-rl-20">|</span>
                      <span className="main-color">Get a price quote </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <section className="contact section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <h3>Get a price quote</h3>
                    <p>
                    Thank you for your interest in Puresaas CRM . Please fill out the form to get your personalized price quote.
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
                        <div className="messages mb-20">
                            <h4>Product requirements</h4>
                        </div>
                        <div className="controls row">
                          <div className="col-lg-12">
                          <div className="form-group mb-30">
                              <label
                                htmlFor="form_no"
                                style={{ marginBottom: "15px" }}
                              >
                               Number of Puresaas CRM Plus Users *
                              </label>
                              <input
                                id="form_no"
                                type="text"
                                name="num_of_user"
                                value={formData.num_of_user}
                                onChange={handleInputChange}
                                required
                              />
                            
                            </div>
                            <div>
                              <p>  Personal details:</p>
                            </div>
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
                          </div>

                         

                          <div className="col-lg-12">
                            <div className="form-group mb-30">
                              <label
                                htmlFor="number"
                                style={{ marginBottom: "15px" }}
                              >
                               Phone Number: *
                              </label>
                              <input
                                id="form_name"
                                type="text"
                                name="contact_number"
                                value={formData.contact_number}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
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
                          </div>

                  

                          <div className="col-12">
                            <div className="form-group mb-30">
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
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group mb-30">
                              <label
                                htmlFor="state"
                                style={{ marginBottom: "15px" }}
                              >
                                State/Region: *
                              </label>
                              <input
                                id="form_subject"
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <p>  Company details:</p>
                          <div className="col-lg-12">
                            <div className="form-group mb-30">
                              <label
                                htmlFor="companyname"
                                style={{ marginBottom: "15px" }}
                              >
                                Company Name: *
                              </label>
                              <input
                                id="form_name"
                                type="text"
                                name="company_name"
                                value={formData.company_name}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <label
                                htmlFor="form_message"
                                style={{ marginBottom: "15px" }}
                              >
                               Comments
                              </label>
                              <textarea
                                id="form_message"
                                name="comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                                placeholder="Message"
                                rows="2"
                                required
                              ></textarea>
                            </div>

                            {/* CAPTCHA */}
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
                                className="form-control"
                                id="captcha-input"
                                value={captchaInput}
                                onChange={handleCaptchaChange}
                                required
                              />
                            </div>

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
                               style={{padding:'10px 0px'}}
                              >
                                <span className="text">Get a price quote</span>
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