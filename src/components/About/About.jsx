import React from "react";

function About() {
  return (
    <section id="sobre-mi" className="section section-alt ">
      
      <div className="container about-grid">
      
        
        <div>
          <h2>Sobre mí</h2>
          <p>
            Soy Melina, Licenciada en Informática y Analista en Sistemas, con experiencia en
            proyectos digitales, desarrollo web y análisis funcional.
          </p>
          <p>
            Me apasiona ayudar a que las ideas no se queden solo en “borradores”,
            sino que se conviertan en soluciones concretas, organizadas y posibles
            de implementar.
          </p>
        </div>
        <div>
          <h3>Algunos enfoques de mi trabajo</h3>
          <ul className="check-list">
            <li>Escucha activa y comprensión del negocio.</li>
            <li>Traducción de necesidades en requerimientos claros.</li>
            <li>Comunicación constante con clientes y equipos.</li>
            <li>Orden y documentación en cada etapa del proyecto.</li>
          </ul>
        </div>
      </div>
     
    </section>
  );
}

export default About;