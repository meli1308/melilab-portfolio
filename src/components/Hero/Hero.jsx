import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div>
          <p className="hero-tag">Licenciada en Informática · Analista Funcional</p>
          <h1>
            Transformo ideas en
            <br />
            proyectos digitales claros y reales.
          </h1>
          <p className="hero-text">
            Ayudo a empresas, equipos y emprendedores a organizar sus proyectos,
            definir requerimientos, crear documentación y llevar sus procesos a lo digital,
            combinando análisis de negocio, metodologías ágiles y desarrollo web.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn-primary">
              Ver servicios
            </a>
            <a href="#contacto" className="btn-secondary">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h3>¿En qué puedo ayudarte?</h3>
          <ul>
            <li>Definir y ordenar un proyecto desde cero.</li>
            <li>Mejorar un sistema o proceso que ya existe.</li>
            <li>Crear documentación clara para tu equipo.</li>
            <li>Coordinar trabajo entre negocio y desarrollo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;