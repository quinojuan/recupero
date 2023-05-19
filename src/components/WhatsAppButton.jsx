import React from "react";
import whatsapp from "../assets/whatsapp.png";
import "../components/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5491160300518"; // Agrega aquí tu número de teléfono

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="container">
        <button className="btn" onClick={handleWhatsAppClick}>
          <img className="wts" src={whatsapp} alt="WhatsApp" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
