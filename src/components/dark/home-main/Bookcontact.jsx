// import React, { useState, useRef, useEffect } from "react";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const Bookcontact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     email: "",
//     password:"",

//   });

//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const canvasRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }
//     if (name === "companyname" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }

//     if (name === "number" && !/^[0-9]{0,10}$/.test(value)) {
//       return; // Allow only digits up to 10
//     }

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {  // Add 'async' here
//     event.preventDefault();

//     if (captchaInput !== captchaCode) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid CAPTCHA",
//         text: "Please try again.",
//       });

//       setCaptchaInput("");
//       return;
//     }

//     const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/booking_demo";

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST", // Typically POST should be used for form submissions
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           companyname: formData.companyname,
//           number: formData.number,
//           email: formData.email,
//           usernumber: formData.usernumber,
//           city: formData.city,
//           message: formData.message,
//           // Include other necessary fields
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log("User created successfully:", result);

//         // Display SweetAlert success message
//         Swal.fire({
//           title: 'Success!',
//           text: 'Thank you for contacting us! Our Team will contact you as soon as possible.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then((result) => {
//           // Check if the user clicked 'OK'
//           if (result.isConfirmed) {
//             // Refresh the page after the user clicks 'OK'
//             window.location.reload();
//           }
//         });
//       } else {
//         console.error("Error:", result);
//         alert(`Error: ${result.error}`);
//         // Handle API errors here (e.g., show an error message)
//       }

//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }

//     console.log("Name:", formData.name);
//     console.log("Company Name:", formData.companyname);
//     console.log("Phone Number:", formData.number);
//     console.log("Email:", formData.email);
//     console.log("Number of Users:", formData.usernumber);
//     console.log("City:", formData.city);
//     console.log("Message:", formData.message);

//     setFormData({
//       name: "",
//       number: "",
//       email: "",
//       password:"",

//     });

//     setCaptchaInput("");
//    ;

//     // Show SweetAlert after successful submission
//     Swal.fire({
//       icon: "success",
//       title: "Demo Booked!",
//       text: "Thank you for Inquiry !",
//       confirmButtonColor: "#3085d6",
//     });
//   };

//   return (
//     <section className="contact section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4">
//             <h2>Book a Demo</h2>
//             <p>
//               Thank you for your interest in Puresaas CRM. We're here to help. Just fill in the form below, and we'll have our best product expert reach out to you.
//             </p>
//           </div>
//           <div className="col-lg-7 offset-lg-1 valign">
//             <div className="full-width" style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderRadius:'10px'}}>
//               <form onSubmit={handleSubmit}>
//                 <div className="messages"></div>
//                 <div className="controls row">
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="form_name">Full Name:</label>
//                       <input
//                         id="form_name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="email">Email:</label>
//                       <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="number">Password:</label>
//                       <input
//                         id="password"
//                         type="text"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="number">Phone Number:</label>
//                       <input
//                         id="number"
//                         type="text"
//                         name="number"
//                         value={formData.number}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                     <div className="mt-15" style={{ justifyContent: "center", display: "flex" }}>
//                       <button type="submit" className="butn butn-full butn-bord radius-30" style={{ padding:" 7px 25px"}}>
//                         <span className="text" >BOOK DEMO</span>
//                       </button>
//                     </div>
//                   </div>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import React, { useState, useRef, useEffect } from "react";
// import Swal from "sweetalert2"; // Import SweetAlert2

// const Bookcontact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     email: "",
//     password:"",

//   });

//   const [captchaCode, setCaptchaCode] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const canvasRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }
//     if (name === "companyname" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }

//     if (name === "number" && !/^[0-9]{0,10}$/.test(value)) {
//       return; // Allow only digits up to 10
//     }

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {  // Add 'async' here
//     event.preventDefault();

//     if (captchaInput !== captchaCode) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid CAPTCHA",
//         text: "Please try again.",
//       });

//       setCaptchaInput("");
//       return;
//     }

//     const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/booking_demo";

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST", // Typically POST should be used for form submissions
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           companyname: formData.companyname,
//           number: formData.number,
//           email: formData.email,
//           usernumber: formData.usernumber,
//           city: formData.city,
//           message: formData.message,
//           // Include other necessary fields
//         }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log("User created successfully:", result);

//         // Display SweetAlert success message
//         Swal.fire({
//           title: 'Success!',
//           text: 'Thank you for contacting us! Our Team will contact you as soon as possible.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }).then((result) => {
//           // Check if the user clicked 'OK'
//           if (result.isConfirmed) {
//             // Refresh the page after the user clicks 'OK'
//             window.location.reload();
//           }
//         });
//       } else {
//         console.error("Error:", result);
//         alert(`Error: ${result.error}`);
//         // Handle API errors here (e.g., show an error message)
//       }

//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }

//     console.log("Name:", formData.name);
//     console.log("Company Name:", formData.companyname);
//     console.log("Phone Number:", formData.number);
//     console.log("Email:", formData.email);
//     console.log("Number of Users:", formData.usernumber);
//     console.log("City:", formData.city);
//     console.log("Message:", formData.message);

//     setFormData({
//       name: "",
//       number: "",
//       email: "",
//       password:"",

//     });

//     setCaptchaInput("");
//    ;

//     // Show SweetAlert after successful submission
//     Swal.fire({
//       icon: "success",
//       title: "Demo Booked!",
//       text: "Thank you for Inquiry !",
//       confirmButtonColor: "#3085d6",
//     });
//   };

//   return (
//     <section className="contact section-padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4">
//             <h2>Book a Demo</h2>
//             <p>
//               Thank you for your interest in Puresaas CRM. We're here to help. Just fill in the form below, and we'll have our best product expert reach out to you.
//             </p>
//           </div>
//           <div className="col-lg-7 offset-lg-1 valign">
//             <div className="full-width" style={{border:'1px solid rgba(255, 255, 255, 0.2)', borderRadius:'10px'}}>
//               <form onSubmit={handleSubmit}>
//                 <div className="messages"></div>
//                 <div className="controls row">
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="form_name">Full Name:</label>
//                       <input
//                         id="form_name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="email">Email:</label>
//                       <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="number">Password:</label>
//                       <input
//                         id="password"
//                         type="text"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="form-group mb-30">
//                       <label htmlFor="number">Phone Number:</label>
//                       <input
//                         id="number"
//                         type="text"
//                         name="number"
//                         value={formData.number}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                     <div className="mt-15" style={{ justifyContent: "center", display: "flex" }}>
//                       <button type="submit" className="butn butn-full butn-bord radius-30" style={{ padding:" 7px 25px"}}>
//                         <span className="text" >BOOK DEMO</span>
//                       </button>
//                     </div>
//                   </div>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Bookcontact;
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { MdOutlineDriveFileRenameOutline, MdPhone, MdOutlineMail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles

const Bookcontact = ({ productName }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (captchaInput !== captchaCode) {
      Swal.fire({
        icon: "error",
        title: "Invalid CAPTCHA",
        text: "Please try again.",
        confirmButtonColor: "#808080",
      });

      setCaptchaInput("");
      return;
    }

    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/individual_bookdemo";
    // https://shubhamsingh.in/Application_Tracking_System/individual_bookdemo
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          number: formData.number,
          product_name: productName, // This is the product name from the parent component
        }),         
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User created successfully:", result);
        Swal.fire({
          title: "Success!",
          text: "Thank you for contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#808080",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      number: "",
    });

    setCaptchaInput("");
    Swal.fire({
      icon: "success",
      title: "Demo Booked!",
      text: "Thank you for Inquiry!",
      confirmButtonColor: "#808080",
    });
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2>Book a Demo</h2>
            <p>
              Thank you for your interest in Puresaas CRM. We're here to help.
              Just fill in the form below, and we'll have our best product
              expert reach out to you.
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
              <form onSubmit={handleSubmit}>
                <div className="messages"></div>
                {/* <input type="text" value={productName} name="product_Name" readOnly style={{ display: "block", textAlign: "center", marginBottom: "10px" }}/> ✅ Read-only field */}
                <div className="controls row">
                  <div className="col-lg-12" style={{ position: "relative" }}>
                    <div className="form-group mb-30">
                      <label htmlFor="form_name" style={{ marginBottom: "15px" }}>
                        Full Name:
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
                        top: "50%",
                        right: "28px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("form_name").focus()}
                    >
                      <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                    </div>
                  </div>
                  <div className="col-lg-12" style={{ position: "relative" }}>
                    <div className="form-group mb-30">
                      <label htmlFor="email" style={{ marginBottom: "15px" }}>
                        Email:
                      </label>
                      <input
                        id="email"
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
                        top: "50%",
                        right: "28px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("email").focus()}
                    >
                      <MdOutlineMail size={20} color="#555" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label htmlFor="number">Phone Number:</label>
                      <input
                        id="phone"
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={(e) => {
                          const newValue = e.target.value.replace(/[^0-9]/g, "");
                          if (newValue.length <= 10) {
                            setFormData({ ...formData, number: newValue });
                          }
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div
                    className="mt-15"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <button
                      type="submit"
                      className="butn butn-full butn-bord radius-30"
                      style={{ padding: " 7px 25px" }}
                    >
                      <span className="text">BOOK DEMO</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookcontact;
