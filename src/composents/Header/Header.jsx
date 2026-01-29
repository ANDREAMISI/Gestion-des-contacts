import React from "react";
import "./header.css";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/react.svg" alt="Applogo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#about">À propos</a></li>
        </ul>
      </nav>
      <input type="text" placeholder="Rechercher un contact..." value={search} onChange={(e) => setSearch(e.target.value)}/>
    </header>
  );
}
export default Header;