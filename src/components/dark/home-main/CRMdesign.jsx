import React, { useState } from "react";
import Swal from "sweetalert2";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdPhone } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export default function CRMdesign() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = {
    width: "280px",
    padding: "12px 40px 12px 12px",
    borderRadius: "30px",
    border: "none",
    background: "#fff",
    fontSize: "16px",
  };
  const handleRadioChange = (e) => {
    setSelectedRadio(selectedRadio === e.target.value ? null : e.target.value);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Allow only letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // Add 'async' here
    e.preventDefault();

    const apiUrl =
      "https://shubhamsingh.in/Application_Tracking_System/free_trial";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Typically POST should be used for form submissions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          contact_number: formData.contact_number,
          // Include other necessary fields
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);

        // Display SweetAlert success message
        Swal.fire({
          title: "Success!",
          text: "Thank you for contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
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

    Swal.fire({
      title: "Success!",
      text: "Thank you for Contact! Our Team will Contact you as soon as Possible.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      password: "",
      contact_number: "",
    });
  };

  return (
    <>
      <div className="zw-template-inner">
        <div className="zcrm-mncnt zcp_lazy_bg ban-sec">
          <section className="">
            <div className="ban-cnt">
              <div className="ban-uprcnt">
                <h1
                  className="ban-hdr anim-init1 anim1"
                  style={{ color: "black" }}
                >
                  Your <span className="dib">great Indian</span>
                  <br />
                  growth story
                </h1>
                <p
                  className="ban-pra anim-init1 anim2"
                  style={{ color: "black" }}
                >
                  Convert more and grow your business in the world's fastest
                  growing economy,
                  <br />
                  with the magic of contextual AI and thoughtful UI.
                </p>
              </div>

              <div className="ban-lwrcnt row">
                <div className="awds-cnt anim-init1 anim4 col-xl-4 col-lg-4 col-12">
                  <div className="awds-cmbcnt">
                    <div style={{ color: "black" }}>
                      <h6 style={{ color: "black", fontSize: "18px" }}>
                        Advantages :-
                      </h6>
                      <ul style={{ paddingTop: "10px" }}>
                        <li style={{ listStyle: "disc" }}>
                          Centralized Client Data :- Keep all client info in one
                          place.
                        </li>
                        <li style={{ listStyle: "disc" }}>
                          Improved Communication :- Automate emails, calls, and
                          reminders.
                        </li>
                        <li style={{ listStyle: "disc" }}>
                          Enhanced Lead Management :- Track and convert leads
                          more efficiently.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="awds-cnt anim-init1 anim5 col-xl-4 col-lg-4 col-12">
                  <div className="awds-cmbcnt">
                    <div style={{ color: "black" }}>
                      <h6 style={{ color: "black", fontSize: "18px" }}>
                        Smart Portfolio Management :-
                      </h6>
                      <ul style={{ paddingTop: "10px" }}>
                        <li style={{ listStyle: "disc" }}>
                          Efficient Portfolio :- Manage client portfolios and
                          trades seamlessly.
                        </li>
                        <li style={{ listStyle: "disc" }}>
                          Automated Lead Tracking :- Automate lead tracking and
                          conversion processes.
                        </li>
                        <li style={{ listStyle: "disc" }}>
                          Maximized Commission :- Maximize commissions through
                          strategic market deals.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="frm-sec"
            style={isMobile ? { display: "none" } : {}}
          >
            <span className="lft-cuv"></span>
            <span className="rgt-cuv"></span>
            <div className="signup-box">
              <h2 className="sgn-hdr" style={{ color: "white" }}>
                Get started with your <br />
                15-day free trial
              </h2>
              <div id="czone-home" className="czone-dc">
                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="banner-signup"
                  id="signupform"
                >
                  <section className="signupcontainer">
                    <div className="sgfrm">
                      <div
                        className="fname labelIcon fL name-input"
                        style={{ position: "relative" }}
                      >
                        <input
                          className="sgnusrname"
                          id="namefield"
                          name="name"
                          placeholder="Full Name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "60px",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            document.getElementById("namefield").focus()
                          }
                        >
                          <MdOutlineDriveFileRenameOutline
                            size={20}
                            color="#555"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="za-email-container sgfrm"
                      style={{ position: "relative" }}
                    >
                      <input
                        className="sgnemail"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "60px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => document.getElementById("email").focus()}
                      >
                        <MdEmail size={20} color="#555" />
                      </div>
                    </div>

                    <div
                      className="za-email-container sgfrm"
                      style={{ position: "relative" }}
                    >
                      <input
                        className="sgnpaswrd"
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"} // Toggle type
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />

                      {/* Password Toggle Icon */}
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "60px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <MdVisibility size={20} color="#555" />
                        ) : (
                          <MdVisibilityOff size={20} color="#555" />
                        )}
                      </div>
                    </div>

                    {/* <div className="input-container" style={{ display: "flex", justifyContent: "center", marginBottom: "0px",marginTop:'6px'}}>
  <div style={{ position: "relative", width: "280px", borderRadius: "30px", overflow: "hidden" }}> 
    <PhoneInput
      country={"in"} 
      value={formData.contact_number}
      onChange={(phone) => setFormData({ ...formData, contact_number: phone })}
      enableSearch={true} 
      inputProps={{
        name: "contact_number",
        required: true,
      }}
      containerStyle={{ width: "100%" }}
      inputStyle={{
        width: "100%",
        padding: "21px 40px 21px 50px",
        borderRadius: "30px",  
        border: "none",
        background: "#fff",
        fontSize: "16px",
      }}
      buttonStyle={{
        borderTopLeftRadius: "30px", 
        borderBottomLeftRadius: "30px",
      }}
      dropdownStyle={{ color: "#000" }} 
    />
   
    <MdPhone
      size={20}
      color="#555"
      style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)" }}
    />
  </div>
</div> */}
                    {/* <div style={{position:'relative'}}>
                   <PhoneInput
                     value={formData.contact_number} // Ensure value comes from state
                     onChange={(phone) =>
                       setFormData({ ...formData, contact_number: phone }) // Update state
                     }
                      country={"in"}                      
                      inputStyle={{
                        width: "98%",
                        height: "44px",
                        fontSize: "16px",
                        color: "#000",
                        backgroundColor: "#fff",
                        borderRadius: "25px",
                        border: "none",
                        paddingLeft: "70px",
                        textAlign: "left",
                        outline: "none", // Removes the default browser outline
                        boxShadow: "none",
                      }}
                      enableSearch={true} // Allows country search
                      // onChange={(phone, country) => handleInputChange({ target: { name: "mobile", value: phone, country: country.iso2 } })} // Updates state properly
                      inputProps={{
                        name: "contact_number",
                        id: "contact_number"                    
                      }}
                      containerStyle={{
                        width: "80%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative", // Helps position elements correctly
                        marginTop: "5px",
                      }}
                      dropdownStyle={{
                        textAlign: "left",
                        fontSize: "14px",
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "10px",
                      }}
                      buttonStyle={{
                        position: "absolute",
                        left: "15px", // Push flag to the left
                        top: "50%",
                        transform: "translateY(-50%)", // Center vertically
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "0",
                      }}
                    />
                     <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "60px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => document.getElementById("contact_number").focus()}
                      >
                        <MdPhone size={20} color="#555" />
                      </div>
                   </div> */}
                    <div
                      className="za-email-container sgfrm"
                      style={{ position: "relative" }}
                    >
                      <input
                        className="sgnemail"
                        id="phone"
                        name="number"
                        placeholder="Phone Number"
                        type="text"
                        value={formData.contact_number}
                        onChange={(e) => {
                          const newValue = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          ); // Allow only numbers
                          if (newValue.length <= 10) {
                            // Limit to 10 digits
                            setFormData({
                              ...formData,
                              contact_number: newValue,
                            });
                          }
                        }}
                        required
                      />

                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "60px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => document.getElementById("phone").focus()}
                      >
                        <MdPhone size={20} color="#555" />
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="sgnbtnmn">
                      <div className="za-tos-container disabled-z-signup">
                        <label
                          className="sign_agree"
                          htmlFor="tos"
                          style={{
                            color: "white",
                            fontSize: "12px",
                            paddingTop: "18px",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <div>
                              <input
                                style={{ width: "100%" }}
                                type="radio"
                                id="html"
                                name="fav_language"
                                value="HTML"
                                required
                              />
                            </div>
                            <div style={{ alignItems: "center" }}>
                              I agree to the{" "}
                              <a href="/terms" target="_blank" rel="noopener">
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="/privacy"
                                target="_blank"
                                className="zrlink"
                                rel="noopener"
                              >
                                Privacy Policy
                              </a>
                              .
                            </div>
                          </div>
                        </label>
                      </div>

                      <button type="submit" className="get-st">
                        GET STARTED
                      </button>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
