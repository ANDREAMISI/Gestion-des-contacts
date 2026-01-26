import React, {useState}  from "react";
import "./contact_form.css";
function ContactForm({ addContact }) {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [photo, setPhoto] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, firstName, email, phone, photo };
        addContact(newContact);
        setName("");
        setFirstName("");
        setEmail("");
        setPhone("");
        setPhoto("");
    };
    return (
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            <button type="submit">Ajouter Contact</button>
          </form>
        </div>
    );
}
export default ContactForm;