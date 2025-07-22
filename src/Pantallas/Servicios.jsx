import "../Componentes/servicios.css";

export default function Servicios() {
  return (
    <div className="Servicios">
      <h1 className="Titulo">Servicios</h1>
      <div className="lista-servicios">
        <div className="servicio">
          <h2 className="servicio-titulo">Desarrollo Web a Medida</h2>
          <p className="servicio-descripcion">
            Creamos sitios web únicos y funcionales que se adaptan a tus
            necesidades específicas.
          </p>
          <ul>
            <li>Diseño completamente personalizado</li>
            <li>Sitios web responsive (adaptables a móviles)</li>
            <li>Integración con sistemas externos (APIs)</li>
            <li>Optimización para SEO básico</li>
          </ul>
          <span className="servicio-icono">💻</span>
          {/* Opcional: <button className="servicio-boton">Más información</button> */}
        </div>
        <div className="servicio">
          <h2 className="servicio-titulo">Desarrollo de SaaS</h2>
          <p className="servicio-descripcion">
            Construimos plataformas SaaS innovadoras y escalables para optimizar
            tu negocio.
          </p>
          <ul>
            <li>Arquitectura robusta y escalable</li>
            <li>Desarrollo de APIs personalizadas</li>
            <li>Integración de pagos y suscripciones</li>
            <li>Paneles de administración intuitivos</li>
          </ul>
          <span className="servicio-icono">🚀</span>
          {/* Opcional: <button className="servicio-boton">Más información</button> */}
        </div>
        {/* Aquí podrías añadir más servicios con su título, descripción, lista de características e icono */}
      </div>
    </div>
  );
}
