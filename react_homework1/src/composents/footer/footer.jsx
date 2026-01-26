import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_contents">
                <div className="pages">
                <h2>Pages</h2>
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                    <li><a href="#about">À propos</a></li>
                </ul>
            </div>
            <div className="contact-info">
                <h2>Contactez-nous</h2>
                <p>Email: <a href="mailto:andreamisi541@gmail.com">andreamisi541@gmail.com</a></p>
                <p>Téléphone: <a href="tel:+243978352541">+243 978 352 541</a></p>
            </div>
            <div className="findus">
                <h2>Retrouvez-nous</h2>
                <p>15 Av3 Ngagara, Bujumbura, Burundi</p>
            </div>
            </div>
            <footer className="tout_droit_reserves">&copy; 2026 Gestion des contacts. Tous droits réservés.</footer>
        </footer>
    );
}
export default Footer;