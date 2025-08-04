import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field } from "formik";
import Bookingbutton from './Bookingbutton';
export default function ATSreal() {
   const [open, setOpen] = useState(false);
  
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    <div>
         <section className="services section-padding pb-0">
          <div className="container">
      <div style={{paddingTop:'80px'}}>
          <div>
            
                    <h3 style={{justifyContent:'center' , display:'flex',marginBottom:'50px'}} className='fontmanage'>How Puresaas works for Application Training System?</h3>
                </div>
                <div>
                  <p style={{fontSize:'20px', textAlign:'justify'}}>PureSaaS delivers a state-of-the-art Application Training System designed to enhance learning experiences and streamline training processes. Contact us today to schedule a demo and explore how our intuitive and feature-rich CRM solution can streamline your sales processes.
</p>
                </div>
               <Bookingbutton />
          </div>

          </div>
        </section>
    </div>
  )
}
