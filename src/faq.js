import { Helmet } from "react-helmet";
import { gsap } from 'gsap';
import React, { useEffect, useLayoutEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import LoadingScreen from "./components/dark/common/loader";
import Cursor from "./components/dark/common/cusor";
import ProgressScroll from "./components/dark/common/ProgressScroll";
import Lines from "./components/dark/common/Lines";
import Navbar from "./components/dark/creative-agency/Navbar";
import Header from "./components/dark/FAQS/Header";
import FAQS from "./components/dark/FAQS/FAQS";
import Testimonials from "./components/dark/home-main/Testimonials";
import Footer from "./components/dark/home-main/Footer";
import Start_exploring from './components/dark/common/Start_exploring';
import Whatsapp from './components/dark/common/Whatsapp';
import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
export default function FAQSpages() {
  // State to hold the form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {  // Add async here
    event.preventDefault(); // Prevent default form submission

    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/ask_que";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Include other necessary fields
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

    // Log form data to console
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    // Show SweetAlert popup
    Swal.fire({
      title: "Comment Posted!",
      text: "Your comment has been successfully submitted.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#808080",
    });

    // Optionally, clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/dark/assets/js/scripts.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
              <Header />
              <FAQS />
              <div className="container" style={{ maxWidth: "1000px" }}>
                <div className="row">
                  <div
                    className="comments-from mt-80"
                    style={{ marginBottom: "8rem" }}
                  >
                    <div className="mb-60" style={{ textAlign: "center" }}>
                      <h3>ASK A QUESTION</h3>
                    </div>
                    <form
                      id="contact-form"
                      method="post"
                      action="contact.php"
                      onSubmit={handleSubmit}
                    >
                      <div className="messages"></div>

                      <div className="controls row">
                        <div className="col-lg-6" style={{ position: "relative" }}>
                          <div className="form-group mb-30">
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "32%",
                              right: "28px",
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

                        <div className="col-lg-6" style={{ position: "relative" }}>
                          <div className="form-group mb-30">
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "32%",
                              right: "28px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                            }}
                            onClick={() => document.getElementById("form_email").focus()}
                          >
                            <MdOutlineMail size={20} color="#555" />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group" style={{ position: "relative" }}>
                            <textarea
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                            ></textarea>
                            <div
                              style={{
                                position: "absolute",
                                top: "16%",
                                right: "15px",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                document.getElementById("form_message").focus()
                              }
                            >
                              <MdOutlineMessage size={20} color="#555" />
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="mt-30">
                              <button type="submit">
                                <span className="text">Post Comment</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <Testimonials />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}