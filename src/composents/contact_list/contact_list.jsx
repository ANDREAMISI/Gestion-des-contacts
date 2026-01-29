import React from "react";
import "./contact_list.css";
import ContactCard from "./contact_card/contact_card.jsx";

function ContactList({ contacts, deleteContact, editContact, }) {

    return (
        <div className="contact-list">
            {contacts.map((contact, index) => (
                <ContactCard 
                    key={index} 
                    contact={contact} 
                    deleteContact={deleteContact} 
                    editContact={editContact} 
                    index={index}
                />
            ))}
        </div>
    );
}
export default ContactList;