// src/Inicio.js
import "../Componentes/inicio.css";
import React from "react";
import Background from "../Componentes/Background";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Inicio() {
  return (
    <ParallaxProvider>
      <Background />
      <section className="Inicio">
        <div className="parent1">
          <div className="text-column">
            <div className="Container">
              <h1 className="Titulo">
                Impulsa tu Presencia Digital con{" "}
                <span className="accent">Orbital Studio</span>
              </h1>
            </div>

            <Parallax speed={-2}>
              <p className="Parrafo">
                En Orbital Studio, impulsamos tu presencia digital con
                soluciones innovadoras. Creamos y comercializamos Software como
                Servicio (SaaS) de vanguardia para optimizar tu negocio online.
                Además, desarrollamos páginas web a medida con diseño atractivo
                y funcionalidad robusta para destacar tu marca digital.
              </p>
            </Parallax>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
