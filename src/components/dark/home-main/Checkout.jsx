import React, { useState } from "react";
import Swal from "sweetalert2";

const Checkout = () => {
  const [showOtpField, setShowOtpField] = useState(false);

  const handleVerifyClick = () => {
    setShowOtpField(true);  // Show OTP field when button is clicked
  };
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    name: "",
    ownername: "",
    email: "",
    subject: "",
    message: "",
    firstname: "",
    lastname: "",
    Address: "",
    add2: "",
    City: "",
    State: "",
    country: "",
    pincode: "",
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
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Log form data to console
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Subject:", formData.subject);
    console.log("Message:", formData.message);

    console.log("mobile:", formData.mobile);
    console.log("password:", formData.password);
    console.log("firstname:", formData.firstname);
    console.log("lastname:", formData.lastname);

    console.log("Address:", formData.Address);
    console.log("add2:", formData.add2);
    console.log("City:", formData.City);
    console.log("State:", formData.State);
    console.log("country:", formData.country);
    console.log("pincode:", formData.pincode);

    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been successfully placed.",
      icon: "success",
      confirmButtonText: "OK",
    });
  
    // Reset form data after submission
    setFormData({
      mobile: "",
      password: "",
      name: "",
      ownername: "",
      email: "",
      subject: "",
      message: "",
      firstname: "",
      lastname: "",
      Address: "",
      add2: "",
      City: "",
      State: "",
      country: "",
      pincode: "",
    });
  };

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 valign">
              <div className="full-width">
                <div className="sec-head mb-30">
                  <h6 className="text-u ls1">Login into your Account</h6>
                </div>
                {/* <div className="mt-30 mb-30">
                  <button
                    type="submit"
                    className="butn butn-full butn-bord radius-30"
                    style={{
                      width: "15%",
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    <span className="text">Sign in</span>
                  </button>
                </div> */}
                <div>
                      {" "}
                      <span
                        type="submit"
                        className="text"
                        style={{
                          backgroundColor: 'rgb(255, 255, 255)', // background-color in camelCase
                          color: 'rgb(0, 0, 0)',                 // color stays the same
                          padding: '7px 34px',                   // padding stays the same
                          borderRadius: '81px' , 
                          marginBottom:'10px' ,
                        }}
                      >
                        Sign in
                      </span>
                    </div>
                <form onSubmit={handleSubmit}>
                  <div className="messages"></div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          Mobile Number:
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required="required"
                          
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          Password:
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                           Name:
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          Owner Name:
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="ownername"
                          value={formData.ownername}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          Email Address:
                        </label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form-group mb-30">
                    {showOtpField && (
        <div style={{ marginTop: '20px' }}>
               <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          OTP:
                        </label>
          <input
            type="text"
            
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
             marginBottom:'10px'
            }}
          />
          <button
            style={{
              marginLeft: '10px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send OTP
          </button>
        </div>
      )}
      </div>
      </div>
                    {/* <div className="mb-30" >
                      <button type="submit" className="butn butn-full butn-bord radius-30" style={{ width: "15%",backgroundColor:'#fff' , color:'#000' }}>
                        <span className="text">Verify Now</span>
                      </button>
                    </div> */}
                    <div>
                      {" "}
                      <span
        type="submit"
        className="text"
        style={{
          backgroundColor: 'rgb(255, 255, 255)', 
          color: 'rgb(0, 0, 0)',
          padding: '7px 34px',
          borderRadius: '81px',
          marginBottom: '10px',
          cursor: 'pointer',
        }}
        onClick={handleVerifyClick}  
      >
        Verify Now
      </span>

      {/* Conditionally render OTP input field */}
   
                    </div>

                    <div className="col-6">
                      <div className="form-group mb-30">
                        <label htmlFor="state" style={{ marginBottom: "15px" }}>
                          Enter GST No:
                        </label>
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                       
                        />
                      </div>
                    </div>

                    <div>
                      <h6 style={{ marginBottom: "30px", fontWeight: "900" }}>
                        Billing details
                      </h6>
                    </div>

                    <div className="controls row">
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                             Name:
                          </label>
                          <input
                            id="form_name"
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            required="required"
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            Last Name:
                          </label>
                          <input
                            id="form_name"
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            required="required"
                          />
                        </div>
                      </div> */}
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            Address:
                          </label>
                          <input
                            id="form_name"
                            type="text"
                            name="Address"
                            value={formData.Address}
                            onChange={handleInputChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            Address 2:
                          </label>
                          <input
                            id="form_name"
                            type="text"
                            name="add2"
                            value={formData.add2}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            City:
                          </label>
                          <input
                            id="form_email"
                            type="text"
                            name="City"
                            value={formData.City}
                            onChange={handleInputChange}
                          
                            required="required"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            State:
                          </label>
                          <input
                            id="form_subject"
                            type="text"
                            name="State"
                            value={formData.State}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            Country:
                          </label>
                          <input
                            id="form_email"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label
                            htmlFor="state"
                            style={{ marginBottom: "15px" }}
                          >
                            Pincode:
                          </label>
                          <input
                            id="form_email"
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            required="required"
                          />
                        </div>
                      </div>
                      {/* <div className="mt-30 mb-30" > */}
                      {/* <div style={{ width: "15%"}}>

                      <button type="submit" className="butn butn-full butn-bord radius-30" style={{backgroundColor:'#fff' , color:'#000' }}>
                        <span className="text">Order Now</span>
                      </button>
                    </div> */}
                      {/* </div>   */}
                      <div>
                        {" "}
                        <span
                          type="submit"
                          className="text"
                          style={{
                            backgroundColor: 'rgb(255, 255, 255)', // background-color in camelCase
                            color: 'rgb(0, 0, 0)',                 // color stays the same
                            padding: '7px 34px',                   // padding stays the same
                            borderRadius: '81px'   
                          }}
                          onClick={handleSubmit}
                        >
                          Order Now
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
