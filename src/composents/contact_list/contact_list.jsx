import React from "react";
import "./contact_list.css";
import ContactCard from "./contact_card/contact_card.jsx";

function ContactList({ contacts }) {
    return (
        <div className="contact-list">
            <h2>Liste des contacts</h2>
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))} 
        </div>
    );
}
export default ContactList;