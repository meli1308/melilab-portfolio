import React from "react";

function Services() {
  return (
    <section id="servicios" className="section services-section">
      <div className="container center">
        <h2>Servicios</h2>
      
          
        

        <div className="cards-grid">
          <div className="card">
            <h3>Análisis funcional y de negocio</h3>
            <p>
              Trabajo como puente entre el negocio, los usuarios y el equipo técnico.
              Ayudo a transformar necesidades en requerimientos claros y priorizados.
            </p>
            <ul>
              <li>Relevamiento de requerimientos con clientes y usuarios.</li>
              <li>Análisis de procesos actuales (AS-IS) y diseño de procesos futuros (TO-BE).</li>
              <li>Definición de alcance, MVP y roadmap.</li>
              <li>Acompañamiento a proyectos nuevos o en marcha.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Documentación y manuales</h3>
            <p>
              Creo documentación útil tanto para equipos técnicos como para usuarios finales,
              manteniendo un lenguaje claro y ordenado.
            </p>
            <ul>
              <li>Manuales de usuario y guías paso a paso.</li>
              <li>Documentación funcional y técnica.</li>
              <li>Historias de usuario y criterios de aceptación.</li>
              <li>Informes y presentaciones para dirección o clientes.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Gestión ágil y coordinación de equipos</h3>
            <p>
              Organizo el trabajo de equipos y proyectos digitales con metodologías ágiles,
              enfocada en el valor y la comunicación clara.
            </p>
            <ul>
              <li>Coordinación de equipos como Project / Analista funcional.</li>
              <li>Uso de herramientas como Trello, Miro, Slack, etc.</li>
              <li>Seguimiento de tareas, tiempos y entregables.</li>
              <li>Puente entre empresa, clientes y desarrollo.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Desarrollo y presencia digital</h3>
            <p>
              Diseño y desarrollo sitios web modernos, adaptados a las necesidades de
              tu negocio y pensados para comunicar de forma profesional.
            </p>
            <ul>
              <li>Desarrollo de sitios web (WordPress, HTML, CSS, JavaScript, React).</li>
              <li>Landing pages para servicios o productos.</li>
              <li>Prototipos y maquetas en Figma.</li>
              <li>Mejoras y ajustes sobre sitios existentes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;