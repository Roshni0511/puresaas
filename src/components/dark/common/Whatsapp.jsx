import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
export default function Whatsapp() {
  return (
    <div>
     <h1
          style={{
            color: "#fff",
            fontSize: "16px",
            background: "rgb(51, 208, 20)",
            padding: "8px 8px",
            borderRadius: "40px",
            position: "fixed",
            right: "21px",
            top: "77%",
            zIndex: 999,
            fontSize: "36px",
            lineHeight:"1px",
            // transform: "rotate(-90deg) translate(50%, 0)",
            cursor: "pointer",
            transition: "all ease-in-out .4s",
          }}
         
        >
            <a href="https://api.whatsapp.com/send?phone=9099383095" class="float" target="_blank">
            <FaWhatsapp /></a>
       
        </h1>
    </div>
  )
}
