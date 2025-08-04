// "use client";
// import React, { useLayoutEffect, useState } from "react";
// import { gsap } from "gsap";
// import Swal from "sweetalert2";
// function Blog() {
//   useLayoutEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
//     tl.fromTo(
//       ".header .container",
//       { opacity: 0, translateY: 40 },
//       { opacity: 1, translateY: 0 },
//       "-=0"
//     );

//     // Cleanup function
//     return () => tl.kill();
//   }, []);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     Swal.fire({
//       title: "Success!",
//       text: "Your comment has been posted successfully.",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }
//     if (name === "message" && !/^[a-zA-Z\s]*$/.test(value)) {
//       return; // Prevent invalid characters in name
//     }
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <>
//       <div
//         className="header page-header bg-img section-padding"
//         data-background="/dark/assets/imgs/header/bg1.jpg"
//         data-overlay-dark="9"
//       >
//         <div className="container pt-100">
//           <div className="text-center">
//             <h1>Blog Details</h1>
//             <div className="mt-15">
//               <a href="/">Home</a>
//               <span className="padding-rl-20">|</span>
//               <span className="main-color">Blog Details</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="blog section-padding">
//         <div className="container">
//           <div className="row xlg-marg">
//             <div className="col-lg-8">
//               <div className="main-post">
//                 <div className="item pb-60">
//                   <article>

//                     <div className="title mt-30">
//                       <h4>Boost Your Business Efficiency with CRM</h4>
//                     </div>
//                     <div className="text mt-20">
//                       <p>
//                         Customer Relationship Management (CRM) software has
//                         evolved into a powerful tool that not only centralizes
//                         customer data but also enhances communication,
//                         streamlines processes, and drives revenue. In this
//                         comprehensive guide, we explore how implementing the
//                         right CRM solution can transform your business
//                         operations and elevate customer satisfaction to new
//                         heights.
//                       </p>
//                     </div>
//                     <div className="text mt-20">
//                       <p>
//                         Customer Relationship Management (CRM) software is a
//                         technology solution designed to help businesses manage
//                         interactions with current and potential customers. It
//                         enables organizations to streamline sales processes,
//                         improve customer service, and build stronger
//                         relationships by centralizing customer information and
//                         automating tasks. In today's competitive market, where
//                         customer experience is paramount, CRM empowers
//                         businesses to deliver personalized service and targeted
//                         marketing campaigns, ultimately driving growth and
//                         profitability.
//                       </p>
//                     </div>
//                   </article>

//                   <div className="mb-50 mt-50">
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <div className="iner-img sm-mb30">
//                           <img
//                             src="/dark/assets/imgs/blog/blogman.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="iner-img">
//                           <img
//                             src="/dark/assets/imgs/blog/blogman2.png"
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="title mb-10">
//                     <h4>Better Security and faster Server</h4>
//                   </div>

//                   <div className="text mb-20">
//                     <p>
//                       CRM systems streamline lead management, automate sales
//                       processes, and provide real-time insights into sales
//                       pipelines. This helps sales teams prioritize leads,
//                       forecast sales more accurately, and ultimately increase
//                       conversion rates.
//                     </p>
//                   </div>

//                 </div>
//                 <div className="info-area flex pt-50 bord-thin-top">
//                   <div>
//                     <div className="tags flex">
//                       <div className="valign">
//                         <span>Tags :</span>
//                       </div>
//                       <div>
//                         <a href="/dark/blog">Optimize</a>
//                         <a href="/dark/blog">Hosting</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="ml-auto">
//                     <div className="share-icon flex">
//                       <div className="valign">
//                         <span>Share :</span>
//                       </div>
//                       <div>
//                         <a href="https://www.facebook.com/">
//                           <i className="fab fa-facebook-f"></i>
//                         </a>

//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="author-area mt-50 bord-thin-bottom">
//                   <div className="flex">
//                     <div className="author-img mr-30">
//                       <div className="img">
//                         <img
//                           src="/dark/assets/imgs/blog/author.png"
//                           alt=""
//                           className="circle-img"
//                         />
//                       </div>
//                     </div>
//                     <div className="cont valign">
//                       <div className="full-width">
//                         <h6 className="fw-600 mb-10">Smith patel</h6>
//                         <p>
//                           Switching to Puresaas was a game-changer for us! It
//                           streamlined our operations and improved customer
//                           interactions significantly. Highly recommend it for
//                           any business looking to boost efficiency and sales.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="comments-from mt-80">
//                 <div className="mb-60">
//                   <h3>Leave a comment</h3>
//                 </div>
//                 <form
//                   id="contact-form"
//                   method="post"
//                   action="contact.php"
//                   onSubmit={handleSubmit}
//                 >
//                   <div className="messages"></div>
//                   <div className="controls row">
//                     <div className="col-lg-6">
//                       <div className="form-group mb-30">
//                         <input
//                           id="form_name"
//                           type="text"
//                           name="name"
//                           placeholder="Name"
//                           required
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="form-group mb-30">
//                         <input
//                           id="form_email"
//                           type="email"
//                           name="email"
//                           placeholder="Email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <div className="form-group">
//                         <textarea
//                           id="form_message"
//                           name="message"
//                           placeholder="Message"
//                           rows="4"
//                           required
//                           value={formData.message}
//                           onChange={handleChange}
//                         ></textarea>
//                       </div>
//                       <div className="text-center">
//                         <div className="mt-30">
//                           <button type="submit">
//                             <span className="text">Post Comment</span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="sidebar">
//                 <div className="search-box">
//                   <input type="text" name="search-post" placeholder="Search" />
//                   <span className="icon pe-7s-search"></span>
//                 </div>
//                 <div className="widget catogry">
//                   <h6 className="title-widget">Categories</h6>
//                   <ul className="rest">
//                     <a href="/dark/RealEstateAgentCRM">
//                       <li>
//                         <span>Real Estate Agent CRM</span>
//                         {/* <span className="ml-auto">33</span> */}
//                       </li>
//                     </a>

//                     <a href="/dark/Realestatecrm">
//                       <li>
//                         <span>Real Estate CRM</span>
//                         {/* <span className="ml-auto">05</span> */}
//                       </li>
//                     </a>

//                     <a href="/dark/salescrm">
//                       <li>
//                         <span>Sales CRM</span>
//                         {/* <span className="ml-auto">17</span> */}
//                       </li>
//                     </a>
//                     <a href="/dark/Servicecrm">
//                       <li>
//                         <span>Service CRM</span>
//                         {/* <span className="ml-auto">28</span> */}
//                       </li>
//                     </a>
//                     <a href="/dark/b2bcrm">
//                       <li>
//                         <span>B2B Textile ERP</span>
//                         {/* <span className="ml-auto">45</span> */}
//                       </li>
//                     </a>

//                     <a href="/dark/telecallercrm">
//                       <li>
//                         <span>Telecaller CRM</span>
//                         {/* <span className="ml-auto">17</span> */}
//                       </li>
//                     </a>

//                     <a href="/dark/ATS">
//                       <li>
//                         <span>ATS (Application Tracking System)</span>
//                         {/* <span className="ml-auto">17</span> */}
//                       </li>
//                     </a>
//                     <a href="/dark/PayrollSystem">
//                       <li>
//                         <span>Payroll System</span>
//                         {/* <span className="ml-auto">17</span> */}
//                       </li>
//                     </a>
//                     <a href="/dark/OfficeERP">
//                       <li>
//                         <span>Office ERP</span>
//                         {/* <span className="ml-auto">17</span> */}
//                       </li>
//                     </a>
//                   </ul>
//                 </div>
//                 <div className="widget last-post-thum">
//                   <h6 className="title-widget">latest Posts</h6>
//                   <div className="item d-flex align-items-center">
//                     <div>
//                       <div className="img">
//                         <a href="#0">
//                           <img src="/dark/assets/imgs/blog/balog3.png" alt="" />
//                           <span className="date">
//                             <span>
//                               14 / <br /> sep
//                             </span>
//                           </span>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="cont">
//                       <span className="tag">
//                         <a href="#0">Web Design</a>
//                       </span>
//                       <h6>
//                         <a href="#0">Advanced Analytics and Reporting</a>
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="item d-flex align-items-center">
//                     <div>
//                       <div className="img">
//                         <a href="#0">
//                           <img src="/dark/assets/imgs/blog/balog2.png" alt="" />
//                           <span className="date">
//                             <span>
//                               14 / <br /> sep
//                             </span>
//                           </span>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="cont">
//                       <span className="tag">
//                         <a href="#0">Web Design</a>
//                       </span>
//                       <h6>
//                         <a href="#0">Automation and Workflow Efficiency</a>
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="item d-flex align-items-center">
//                     <div>
//                       <div className="img">
//                         <a href="#0">
//                           <img src="/dark/assets/imgs/blog/blaog1.png" alt="" />
//                           <span className="date">
//                             <span>
//                               14 / <br /> sep
//                             </span>
//                           </span>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="cont">
//                       <span className="tag">
//                         <a href="#0">Web Design</a>
//                       </span>
//                       <h6>
//                         <a href="#0">Customizable Solutions</a>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="widget tags">
//                   <h6 className="title-widget">Tags</h6>
//                   <div>
//                     {/* <a href="#0">Data Analytics</a> just example this link kadhi che  */}
//                     <a href="#0">Data Analytics</a>
//                     <a href="#0">Data Security</a>
//                     <a href="#0">User-friendly CRM</a>
//                     <a href="#0">Workflow Optimization</a>
//                     {/* <a href="#0">Infolio</a> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Blog;
"use client";
import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Swal from "sweetalert2";
import { MdOutlineDriveFileRenameOutline, MdPhone } from "react-icons/md";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
const categories = [
  { name: "Real Estate Agent CRM", link: "/RealEstateAgentCRM" },
  { name: "Real Estate CRM", link: "/Realestatecrm" },
  { name: "Sales CRM", link: "/salescrm" },
  { name: "Service CRM", link: "/Servicecrm" },
  { name: "B2B Textile ERP", link: "/b2bcrm" },
  { name: "Telecaller CRM", link: "/telecallercrm" },
  { name: "ATS (Application Tracking System)", link: "/ATS" },
  { name: "Payroll System", link: "/PayrollSystem" },
  { name: "Office ERP", link: "/Officeerp" },
];

function Blog() {
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
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl =
      "https://shubhamsingh.in/Application_Tracking_System/blogs_comment";

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
          title: "Success!",
          text: "Thank you for contacting us! Our Team will contact you as soon as possible.",
          icon: "success",
          confirmButtonText: "OK",
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

    Swal.fire({
      title: "Success!",
      text: "Your comment has been posted successfully.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#808080",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent invalid characters in name
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className="header page-header bg-img section-padding"
        data-background="/dark/assets/imgs/header/bg1.jpg"
        data-overlay-dark="9"
      >
        <div className="container pt-100">
          <div className="text-center">
            <h1>Blog Details</h1>
            <div className="mt-15">
              <a href="/">Home</a>
              <span className="padding-rl-20">|</span>
              <span className="main-color">Blog Details</span>
            </div>
          </div>
        </div>
      </div>
      <section className="blog section-padding">
        <div className="container">
          <div className="row xlg-marg">
            <div className="col-lg-8">
              <div className="main-post">
                <div className="item pb-60">
                  <article>
                    <div className="title mt-30">
                      <h4>Boost Your Business Efficiency with CRM</h4>
                    </div>
                    <div className="text mt-20">
                      <p>
                        Customer Relationship Management (CRM) software has
                        evolved into a powerful tool that not only centralizes
                        customer data but also enhances communication,
                        streamlines processes, and drives revenue. In this
                        comprehensive guide, we explore how implementing the
                        right CRM solution can transform your business
                        operations and elevate customer satisfaction to new
                        heights.
                      </p>
                    </div>
                    <div className="text mt-20">
                      <p>
                        Customer Relationship Management (CRM) software is a
                        technology solution designed to help businesses manage
                        interactions with current and potential customers. It
                        enables organizations to streamline sales processes,
                        improve customer service, and build stronger
                        relationships by centralizing customer information and
                        automating tasks. In today's competitive market, where
                        customer experience is paramount, CRM empowers
                        businesses to deliver personalized service and targeted
                        marketing campaigns, ultimately driving growth and
                        profitability.
                      </p>
                    </div>
                  </article>

                  <div className="mb-50 mt-50">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="iner-img sm-mb30">
                          <img
                            src="/dark/assets/imgs/blog/blogman.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="iner-img">
                          <img
                            src="/dark/assets/imgs/blog/blogman2.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="title mb-10">
                    <h4>Better Security and faster Server</h4>
                  </div>

                  <div className="text mb-20">
                    <p>
                      CRM systems streamline lead management, automate sales
                      processes, and provide real-time insights into sales
                      pipelines. This helps sales teams prioritize leads,
                      forecast sales more accurately, and ultimately increase
                      conversion rates.
                    </p>
                  </div>
                </div>
                <div className="info-area flex pt-50 bord-thin-top">
                  <div>
                    <div className="tags flex">
                      <div className="valign">
                        <span>Tags :</span>
                      </div>
                      <div>
                        <a href="/blogdetails">Optimize</a>
                        <a href="/blogdetails">Hosting</a>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="share-icon flex">
                      <div className="valign">
                        <span>Share :</span>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="author-area mt-50 bord-thin-bottom">
                  <div className="flex">
                    <div className="author-img mr-30">
                      <div className="img">
                        <img
                          src="/dark/assets/imgs/blog/author.png"
                          alt=""
                          className="circle-img"
                        />
                      </div>
                    </div>
                    <div className="cont valign">
                      <div className="full-width">
                        <h6 className="fw-600 mb-10">Smith patel</h6>
                        <p>
                          Switching to Puresaas was a game-changer for us! It
                          streamlined our operations and improved customer
                          interactions significantly. Highly recommend it for
                          any business looking to boost efficiency and sales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments-from mt-80">
                <div className="mb-60">
                  <h3>Leave a comment</h3>
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
                          required
                          value={formData.name}
                          onChange={handleChange}
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
                        <MdOutlineDriveFileRenameOutline
                          size={20}
                          color="#555"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6" style={{ position: "relative" }}>
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
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
                    <div className="col-12">
                      <div
                        className="form-group"
                        style={{ position: "relative" }}
                      >
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required
                          value={formData.message}
                          onChange={handleChange}
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
            <div className="col-lg-4">
              <div className="sidebar">
                <div>
                  <div className="search-box">
                    <input
                      type="text"
                      name="search-post"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="icon pe-7s-search"></span>
                  </div>
                  <div className="widget catogry">
                    <h6 className="title-widget">Categories</h6>
                    <ul className="rest">
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
                          <a key={index} href={category.link}>
                            <li>
                              <span>{category.name}</span>
                            </li>
                          </a>
                        ))
                      ) : (
                        <li>No categories found</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="widget last-post-thum">
                  <h6 className="title-widget">latest Posts</h6>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="">
                          <img src="/dark/assets/imgs/blog/balog3.png" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="">Web Design</a>
                      </span>
                      <h6>
                        <a href="">Advanced Analytics and Reporting</a>
                      </h6>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="">
                          <img src="/dark/assets/imgs/blog/balog2.png" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="">Web Design</a>
                      </span>
                      <h6>
                        <a href="">Automation and Workflow Efficiency</a>
                      </h6>
                    </div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div>
                      <div className="img">
                        <a href="">
                          <img src="/dark/assets/imgs/blog/blaog1.png" alt="" />
                          <span className="date">
                            <span>
                              14 / <br /> sep
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        <a href="">Web Design</a>
                      </span>
                      <h6>
                        <a href="">Customizable Solutions</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="widget tags">
                  <h6 className="title-widget">Tags</h6>
                  <div>
                    {/* <a href="#0">Data Analytics</a> just example this link kadhi che  */}
                    <a href="">Data Analytics</a>
                    <a href="">Data Security</a>
                    <a href="">User-friendly CRM</a>
                    <a href="">Workflow Optimization</a>
                    {/* <a href="#0">Infolio</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
