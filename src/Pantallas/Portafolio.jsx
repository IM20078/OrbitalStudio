import ProjectCard from "../Componentes/Minicomponents/Cardprojects";
import "../Componentes/Portafolio.css";
export default function Portafolio() {
  return (
    <>
      <h2 className="Titulo">Portafolio</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <ProjectCard
          title="BarberPage"
          description="Una aplicación web para gestionar turnos, clientes y servicios en barberías."
          link="https://github.com/ivan200789/BarberPage"
        />
        <ProjectCard
          title="Portafolio Web"
          description="Portafolio web desarrollado con React para presentar mis proyectos y habilidades."
          link="https://portfolio-lemon-eta-56.vercel.app/"
        />
        <ProjectCard
          title="Mockups"
          description="Red social de código abierto desarrollada para fomentar la colaboración y el intercambio de ideas."
          link="https://github.com/ivan200789/RedSocialIM2.0"
        />
      </div>
    </>
  );
}
