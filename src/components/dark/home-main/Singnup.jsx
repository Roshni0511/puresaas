import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // Validation logic for name
    if (name === "name" && !/^[A-Za-z ]*$/.test(value)) {
      return;
    }
    
    // Validation logic for phone number (Ensure 10 digits input)
    if (name === "mobile" && (!/^[0-9]*$/.test(value) || value.length > 10)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.mobile.length !== 10) {
      Swal.fire({
        title: 'Error!',
        text: 'Phone number must be exactly 10 digits!',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match!',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/pusesaas_reg";
    
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          mobile: formData.mobile,
        }),
      });
      
      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Thank you for registering! Our team will contact you as soon as possible.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
      } else {
        console.error("Error:", result);
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    });
  
  };

  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <div className="row" style={{ height: '100vh', margin: '0' }}>
        <div className="col-md-4 col-lg-3 imagese" style={{ padding: '20px', textAlign: 'center', color: 'white', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ justifyContent: 'center', display: 'flex', marginBottom: '13px' }}>
            <img src='/dark/assets/imgs/icon-img/shubhamsir02.png' style={{ width: '25%', borderRadius: '100%' }} />
          </div>
          <p style={{ textAlign: 'justify' }}>
             "The ease and simplicity of the program and the way that the Puresaas Team have continued to             develop solutions around and integrated with the CRM. We utilize projects for clients and the              Puresaas meeting for training and presentations. From the mobile device, the automated calling               and tracking is Fabulous.            </p>
          <h3 style={{ color: '#00add5', fontWeight: '700' }}>SHUBHAM SINGH</h3>
        </div>

        <div className="col-md-8 col-lg-9">
          <div className="flex flex-col items-center justify-center bg-gray-100" style={{ padding: '50px 0', minHeight: '100vh' }}>
            <div className="container">
              <div className="p-8 rounded-md w-full max-w-md news">
                <h5 className='h5'>Sign Up</h5>
                <h2 className="text-xl font-bold text-center mb-4">CREATE <span className="text-blue-600">ACCOUNT</span></h2>

                <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-12 col-md-6">
                  <div className="col-12">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="form-control mb-3" placeholder="User Name" />
                  </div> 
                  <div className="col-12">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-control mb-3" placeholder="Email Address" />
                  </div>
                  <div className="col-12">
                    <label>Phone Number:</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required className="form-control mb-3" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required className="form-control mb-3" placeholder="Password" />
                  </div>
                  <div className="col-12">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required className="form-control mb-3" placeholder="Confirm Password" />
                  </div>
                  <div className="flex items-center mb-4">
                          <input type="checkbox" name="agree" className="mr-2" />
                          <label style={{ marginLeft: '10px', fontSize: '16px' }}>
                            I agree to the{' '}
                            <a href="/dark/terms" className="text-blue-600" target='_blank'>
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/dark/privacy" className="text-blue-600" target='_blank'>
                              Privacy Policy
                            </a>
                            .
                          </label>
                        </div>
                  <button type="submit" className="btn btn-dark w-100">GET STARTED</button>
                  </div>
                  <div className="col-12 col-md-6" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        <div>
                          <div className="mt-6 text-center text-sm text-gray-600">
                            <p className='need'>Need assistance?</p>
                            <p className='title'> Contact our toll free number</p>
                            <p className='number'>📞 90993 83095</p>
                            <p className='title'>Reach out to us</p>
                            <p>📧 info@puresaas.com</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </form>


                <div className="col-12" style={{ margin: '26px 0px', display: 'flex', justifyContent: 'start' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', padding: '0px' }}>
                    <li style={{ border: '1px solid #6b7499', borderRadius: '100%', marginRight: '10px' }}>
  <a 
    href="https://www.facebook.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FacebookIcon style={{ color: '#4969a8', padding: '6px 8px', fontSize: '40px' }} />
  </a>
</li>

<li style={{ border: '1px solid #6b7499', borderRadius: '100%', marginRight: '10px' }}>
  <a 
    href="https://www.instagram.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <InstagramIcon style={{ color: '#e8715c', padding: '6px 8px', fontSize: '40px' }} />
  </a>
</li>

                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
