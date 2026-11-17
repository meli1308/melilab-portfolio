import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} · Melina Benítez · Proyectos digitales y análisis funcional</p>
        <div className="footer-links">
          {/* Acá después podés poner tu LinkedIn real */}
          <a href="www.linkedin.com/in/melina-estefanía-benitez" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="asesoramiento.informatico24@gmail.com">asesoramiento.informatico24@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
