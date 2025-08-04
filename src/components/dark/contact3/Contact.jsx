import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { MdSubject } from "react-icons/md";

import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { MdOutlineMail, MdOutlineMessage  } from "react-icons/md";
function Contact() {
  // State hooks for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    console.log("Submitting form with data:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Include other necessary fields as required by your backend
    });

    const apiUrl =
      "https://shubhamsingh.in/Application_Tracking_System/inquiry_msg";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          // Include other necessary fields
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);

        // Display SweetAlert success message
        Swal.fire({
          title: "Success!",
          text: "Thank you for Contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#808080",
        }).then(() => {
          // Refresh the page after the user clicks 'OK'
          window.location.reload();
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
        // Handle API errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign" style={{flexDirection:"column",rowGap:"15px"}}>
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <img src="/dark/assets/imgs/serv-img/employee.png" alt="" style={{width:"54px",paddingBottom:"5px"}}/>
                
                <p style={{padding:"10px 0px"}}>Want a demo or need details on our pricing and products? Let’s talk!</p>
              </div>
              <div className="morinfo" style={{display:"flex",flexDirection:"column"}}>
                {/* <h6 className="mb-15">Email</h6> */}
                <a href="tel:+919638373601" style={{paddingBottom:"10px"}}>+91 9638373601</a>
                <a href="mailto:sales@puresaas.in">sales@puresaas.in</a>
              </div>

              {/* <div className="social-icon-circle mt-50">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div> */}
            </div>
            <div className="sec-head info-box full-width md-mb80">
               <div className="phone fz-30 fw-600 underline main-color">
                <img src="/dark/assets/imgs/serv-img/upgrade.png" alt="" style={{width:"54px",paddingBottom:"5px"}}/>
               
                <p style={{padding:"10px 0px"}}>Looking to upgrade, modify your plan, or add new services? We're here to help!</p>
              </div>
              <div className="morinfo"  style={{display:"flex",flexDirection:"column"}}>
                {/* <h6 className="mb-15">Email</h6> */}
                <a href="tel:+919638373601" style={{paddingBottom:"10px"}}>+91 9638373601</a>
                <a  href="mailto:upgrade@puresaas.in">upgrade@puresaas.in</a>
                {/* <a  href="">upgrade@puresaas.in</a> */}

              </div>            
            </div>
            <div className="sec-head info-box full-width md-mb80">
               <div className="phone fz-30 fw-600 underline main-color">
                <img src="/dark/assets/imgs/serv-img/renewable.png" alt="" style={{width:"45px",paddingBottom:"5px"}}/>
                
                <p style={{padding:"10px 0px"}}>Looking to renew your subscription or check your plan details? Let us assist you!</p>
              </div>
              <div className="morinfo" style={{display:"flex",flexDirection:"column"}}>
                {/* <h6 className="mb-15">Email</h6> */}
                <a href="tel:+919638373601" style={{paddingBottom:"10px"}}>+91 9638373601</a>
                {/* <a href="">renewal@puresaas.in</a> */}
                <a  href="mailto:renewal@puresaas.in">renewal@puresaas.in</a>
              </div>            
            </div>
            <div className="sec-head info-box full-width md-mb80">
               <div className="phone fz-30 fw-600 underline main-color">
                <img src="/dark/assets/imgs/serv-img/cancel.png" alt="" style={{width:"45px",paddingBottom:"5px"}}/>
              
                <p style={{padding:"10px 0px"}}>Need to cancel or downgrade? We’re here to help.</p>
              </div>
              <div className="morinfo" style={{display:"flex",flexDirection:"column"}}>
                {/* <h6 className="mb-15">Email</h6> */}
                <a href="tel:+919638373601" style={{paddingBottom:"10px"}}>+91 9638373601</a>
                {/* <a href="">cancellation@puresaas.in</a> */}
                <a  href="mailto:cancellation@puresaas.in">cancellation@puresaas.in</a>
              </div>            
            </div>
            
          </div>
          <div className="col-lg-7 offset-lg-1 ">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let's Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6" style={{ position: "relative" }}>
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
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
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
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
                        document.getElementById("form_email").focus()
                      }
                    >
                      <MdOutlineMail size={20} color="#555" />
                    </div>
                  </div>

                  <div className="col-12" style={{ position: "relative" }}>
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
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
                        document.getElementById("form_subject").focus()
                      }
                    >
                      <MdSubject size={20} color="#555" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div
                      className="form-group"
                      style={{ position: "relative" }}
                    >
                      <textarea
                        id="form_message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows="4"
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
                        <MdOutlineMessage  size={20} color="#555" />
                      </div>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let's Talk</span>
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
  );
}

export default Contact;
