import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.1); /* fondo semi-transparente */
  backdrop-filter: blur(10px); /* efecto de desenfoque */
  -webkit-backdrop-filter: blur(10px); /* soporte para Safari */
  color: white;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* sombra suave */
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    font-family: "Montserrat", sans-serif;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffff;
    }
  }
`;

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <Menu>
        <ul>
          <li>
            <a onClick={() => scrollToSection("inicio")}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("servicios")}>Servicios</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("sobre-nosotros")}>
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contacto")}>Contacto</a>
          </li>
        </ul>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
