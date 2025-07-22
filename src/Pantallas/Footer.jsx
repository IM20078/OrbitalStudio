import React from "react";
import "../Componentes/Footer.css"; // Asegúrate de importar el archivo CSS

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Orbital Studio — Innovando el futuro.
        Todos los derechos reservados.
      </p>
    </div>
  );
}
