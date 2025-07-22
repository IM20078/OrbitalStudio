import React, { useState } from "react";

export default function SobreNosotros() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.card,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Parte frontal */}
        <div style={{ ...styles.face, ...styles.front }}>
          <h1 style={styles.title}>Acerca de nosotros</h1>
          <p style={styles.text}>
            Descubrí quiénes somos y por qué amamos lo que hacemos.
          </p>
          <button onClick={handleFlip} style={styles.button}>
            Ver más
          </button>
        </div>

        {/* Parte trasera */}
        <div style={{ ...styles.face, ...styles.back }}>
          <h2 style={{ ...styles.title, color: "#fff" }}>
            Somos un equipo apasionado 🚀
          </h2>
          <p style={{ ...styles.text, color: "#e0e0e0" }}>
            Combinamos diseño, innovación y tecnología para dar vida a proyectos
            únicos. Nuestro objetivo no es solo crear productos funcionales,
            sino experiencias que conecten, inspiren y dejen una huella en el
            futuro.
          </p>
          <button onClick={handleFlip} style={styles.button}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    maxWidth: "900px",
    height: "90vh",
    margin: "5vh auto",
    perspective: "1500px",
  },
  card: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "24px",
    transformStyle: "preserve-3d",
    transition: "transform 1.8s cubic-bezier(0.77, 0, 0.175, 1)",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  },
  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    boxSizing: "border-box",
    textAlign: "center",
  },
  front: {
    background: "linear-gradient(135deg, #0ff1ce, #3c009d)",
    color: "#fff",
  },
  back: {
    background: "linear-gradient(135deg, #ff00cc, #333399)",
    transform: "rotateY(180deg)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    maxWidth: "80%",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "background 0.3s",
  },
};
