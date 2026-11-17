import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">

        <div className="logo-icon">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        {/* BOTON HAMBURGUESA */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proceso">Cómo trabajo</a>
          <a href="#contacto" className="btn-link">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;
