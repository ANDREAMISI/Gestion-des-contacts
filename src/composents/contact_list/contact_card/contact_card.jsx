import React from "react";
import "./contact_card.css";

function ContactCard({ contact, deleteContact, editContact, index }) {   
    
    return (
        <div className="contact-card">
            <div className="img_container">
                <img src={contact.photo || "http://localhost:5173/src/assets/react.svg"} alt={`${contact.firstName} ${contact.name}`} />
            </div>
            <div className="info_container">
            <h2>{contact.firstName} {contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Téléphone: {contact.phone}</p>
            </div>
            <div className="actions">
                <button onClick={() => deleteContact(index)}>Supprimer</button>
                <button onClick={() => editContact(index)}>Modifier</button>
            </div>
        </div>
    );
}
export default ContactCard;