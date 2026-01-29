import React, {useEffect, useState}  from "react";
import "./contact_form.css";
function ContactForm({ addContact, editContact, contacts, editingIndex }) {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        if (editingIndex !== null && contacts[editingIndex]) {
            const contact = contacts[editingIndex];
            setName(contact.name);
            setFirstName(contact.firstName);
            setEmail(contact.email);
            setPhone(contact.phone);
            setPhoto(contact.photo);
        } else {
            setName("");
            setFirstName("");
            setEmail("");
            setPhone("");
            setPhoto("");
        }
    }, [editingIndex, contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, firstName, email, phone, photo };
        if (editingIndex !== null) {
            editContact(editingIndex, newContact);
        } else {
            addContact(newContact);
        }
        setName("");
        setFirstName("");
        setEmail("");
        setPhone("");
        setPhoto("");
    };
    return (
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#', padding: '20px', borderRadius: '5px'  }}>
            <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            <button type="submit">{editingIndex !== null ? "Modifier Contact" : "Ajouter Contact"}</button>
          </form>
        </div>
    );
}
export default ContactForm;