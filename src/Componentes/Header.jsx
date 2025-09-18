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
    max-width: 100%;
    object-fit: contain;

    @media (max-width: 768px) {
      height: 36px;
    }

    @media (max-width: 480px) {
      height: 28px;
    }
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1100;
  width: 30px;
  height: 22px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: ${({ open }) => (open ? "10px" : "0")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-child(2) {
    top: 10px;
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ open }) => (open ? "10px" : "20px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
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
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(12px);
      justify-content: center;
      align-items: center;
      gap: 20px;
      transition: transform 0.3s ease;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
      z-index: 1000;
    }
  }

  li {
    margin: 0 15px;

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }

  a {
    font-family: "Montserrat", sans-serif;
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #00ffff;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
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

      <Burger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Burger>
    </HeaderContainer>
  );
};

export default Header;
