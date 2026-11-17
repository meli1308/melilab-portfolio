
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState("");

  const enviarMensaje = async (e) => {
    e.preventDefault();

    if (enviando) return;

    setEnviando(true);
    setEstado("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC,
        }
      );

      setEstado("¡Mensaje enviado correctamente! Gracias por escribirme.");
      form.current.reset();
    } catch (error) {
  console.error("Error EmailJS:", error);

  setEstado(
    "Error " + (error?.status || "desconocido") +
    ": " + (error?.text || "No se pudo enviar")
  );

} finally {
  setEnviando(false);
}
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container contact-grid">

        <div>
          <h2>Contacto</h2>

          <p>
            Si querés que trabajemos juntos o tenés un proyecto en mente,
            escribime y coordinamos una charla.
          </p>

          <p className="contact-highlight">
            Podés contarme en qué etapa estás: idea inicial,
            proyecto en marcha, sistema existente o necesidad
            de ordenar documentación.
          </p>
        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={enviarMensaje}
        >
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              required
              minLength={3}
              maxLength={100}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              maxLength={254}
            />
          </label>

          <label>
            Mensaje
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Contame brevemente tu necesidad o proyecto..."
              required
              minLength={10}
              maxLength={3000}
            />
          </label>

          <button
            type="submit"
            className="btn-primary full-width"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>

          {estado && (
            <p role="status" aria-live="polite">
              {estado}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;
