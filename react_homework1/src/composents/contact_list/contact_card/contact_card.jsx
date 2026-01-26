import React from "react";
import "./contact_card.css";

function ContactCard({ contact}) {   
    return (
        <div className="contact-card">
            <div className="img_container">
                <img src={contact.photo || "https://via.placeholder.com/150"} alt={`${contact.firstName} ${contact.name}`} />
            </div>
            <div className="info_container">
            <h2>{contact.firstName} {contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Téléphone: {contact.phone}</p>
            </div>
        </div>
    );
}
export default ContactCard;