import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  MdLocationCity,
  MdMarkunreadMailbox,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMail,
  MdOutlinePlace,
  MdPeople,
} from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";
import { MdPhone } from "react-icons/md"; // Phone icon
const handleSubmit = async (values) => {
  const apiUrl = "https://shubhamsingh.in/Application_Tracking_System/all_inq";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Thank you for contacting us! Our Team will contact you as soon as possible.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => window.location.reload());
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export default function Bookingbutton() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    const value = event.target.value;

    // Allow only digits and limit to 10 characters
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "9px 30px",
            borderRadius: "1.61765rem",
            fontWeight: "400",
            border: "0px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
        >
          BOOK A DEMO
        </button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            Demo Booking
            <IconButton
              onClick={() => setOpen(false)}
              style={{ position: "absolute", right: 10, top: 10 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                company: "",
                employees: "",
                city: "",
                state: "",
                zip: "",
                types: "",
              }}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
                resetForm();
                setOpen(false);
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                setFieldValue,
                touched,
              }) => (
                <Form>
                  <FormControl fullWidth margin="dense" variant="outlined">
                    <InputLabel id="user-type-label">Product Type</InputLabel>
                    <Select
                      labelId="user-type-label"
                      name="types"
                      value={values.types}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      label="Product Type"
                    >
                      <MenuItem value="" disabled>
                        Select Product Type
                      </MenuItem>
                      <MenuItem value="Real Estate Agent CRM">
                        Real Estate Agent CRM
                      </MenuItem>
                      <MenuItem value="Real Estate CRM">
                        Real Estate CRM
                      </MenuItem>
                      <MenuItem value="Sales CRM">Sales CRM</MenuItem>
                      <MenuItem value="Service CRM">Service CRM</MenuItem>
                      <MenuItem value="B2B Textile ERP">
                        B2B Textile ERP
                      </MenuItem>
                      <MenuItem value="Telecaller CRM">Telecaller CRM</MenuItem>
                      <MenuItem value="ATS">
                        ATS (Application Tracking System)
                      </MenuItem>
                      <MenuItem value="Payroll System">Payroll System</MenuItem>
                      <MenuItem value="Office ERP">Office ERP</MenuItem>
                    </Select>
                  </FormControl>

                  <div style={{ position: "relative" }}>
                    <TextField
                      name="name"
                      id="name1"
                      label="Name"
                      fullWidth
                      margin="dense"
                      required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("name1").focus()}
                    >
                      <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                    </div>
                  </div>
                  {/* <div style={{position:'relative'}}>
                 <PhoneInput
                 
                    country={"in"}
                    value={values.phone}
                    onChange={(phone) => setFieldValue("phone", phone)}
                    inputStyle={{ width: "100%", height: "57px" }}
                    containerStyle={{ marginTop: "5px" }}
                    inputProps={{                    
                      id: "contact_bnumber1"                    
                    }}
                    
                    enableSearch={true} 
                  />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("contact_bnumber1").focus()}
                    >
                      <MdPhone size={20} color="#555" />
                    </div>
                 </div> */}

                  <div style={{ position: "relative" }}>
                  <TextField
                      label="Phone Number"
                      name="phone"
                      id="phone1"
                      fullWidth
                      margin="dense"
                      required
                      value={values.phone}
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/\D/g, ""); // Allow only numbers
                        if (inputValue.length <= 10) {
                          setFieldValue("phone", inputValue);
                        }
                      }}
                      inputProps={{
                        maxLength: 10,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("phone1").focus()}
                    >
                      <MdPhone size={20} color="#555" />
                    </div>
                  </div>
                  
                  <div style={{ position: "relative" }}>
                    <TextField
                      name="email"
                      id="email1"
                      label="Email Address"
                      fullWidth
                      margin="dense"
                      required
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.email &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
                      }
                      helperText={
                        touched.email &&
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
                          ? "Enter a valid email address"
                          : ""
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("email1").focus()}
                    >
                      <MdOutlineMail size={20} color="#555" />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <TextField
                      id="form_name1"
                      name="company_name"
                      label="Company Name"
                      fullWidth
                      margin="dense"
                      required
                      value={values.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById("form_name1").focus()
                      }
                    >
                      <MdOutlineDriveFileRenameOutline size={20} color="#555" />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <TextField
                      name="no_emp"
                      id="employe1"
                      label="Number of Employees"
                      fullWidth
                      margin="dense"
                      required
                      value={values.no_emp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById("employe1").focus()
                      }
                    >
                      <MdPeople size={20} color="#555" />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <TextField
                      name="city"
                      label="City"
                      id="city1"
                      fullWidth
                      margin="dense"
                      required
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("city1").focus()}
                    >
                      <MdLocationCity size={20} color="#555" />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <TextField
                      name="state"
                      id="state1"
                      label="State/Region"
                      fullWidth
                      margin="dense"
                      required
                      value={values.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^a-zA-Z\s]/g,
                          ""
                        );
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("state1").focus()}
                    >
                      <MdOutlinePlace size={20} color="#555" />
                    </div>
                  </div>

                  <div style={{ position: "relative" }}>
                    <TextField
                      name="zipcode"
                      id="zip1"
                      label="Zip Code"
                      fullWidth
                      margin="dense"
                      required
                      value={values.zipcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only digits (0-9) allowed
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "46%",
                        right: "23px",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("zip1").focus()}
                    >
                      <MdMarkunreadMailbox size={20} color="#555" />
                    </div>
                  </div>

                  <Button
                    style={{
                      color: "black",
                      background: "rgb(119 119 119 / 43%)",
                    }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, backgroundColor: "#333" }}
                    disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)}
                  >
                    Book Demo
                  </Button>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
