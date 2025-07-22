import React from "react";
import Background from "./Componentes/Background";
import Header from "./Componentes/Header";
import Inicio from "../src/Pantallas/Inicio";
import Servicios from "../src/Pantallas/Servicios";
import "./App.css";
import Portafolio from "../src/Pantallas/Portafolio";
import SobreNosotros from "../src/Pantallas/sobreNosotros";
import Footer from "./Pantallas/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const App = () => {
  return (
    <div>
      <Header />
      <div id="inicio">
        <Inicio />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="portfolio">
        <Portafolio />
      </div>
      <div id="sobre-nosotros">
        <SobreNosotros />
      </div>
      <div id="contacto">
        <Footer />
      </div>
      <FloatingWhatsApp
        phoneNumber="+542615985227"
        accountName="Orbital Studio"
        chatMessage="Hola! Como podemos ayudarte?"
        statusMessage="Generalmente responde en 10 minutos."
        placeholder="Escriba su mensaje.."
      />
    </div>
  );
};
export default App;
