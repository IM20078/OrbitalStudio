import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;

    @media (max-width: 768px) {
      height: 32px;
    }
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 28px;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: ${({ open }) => (open ? "flex" : "none")};
      padding: 10px 0;
      z-index: 1000;
    }
  }

  li {
    margin: 0 10px;

    @media (max-width: 768px) {
      margin: 15px 0;
      text-align: center;
    }
  }

  a {
    font-family: "Montserrat", sans-serif;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 16px;

    &:hover {
      color: #00ffff;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cerrar el menú en mobile
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/Logo sin fondo.png" alt="Logo" />

      </Logo>

      <MenuWrapper>
        <Menu open={menuOpen}>
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
          </ul>
        </Menu>
      </MenuWrapper>

      <Burger onClick={() => setMenuOpen(!menuOpen)}>☰</Burger>
    </HeaderContainer>
  );
};

export default Header;
