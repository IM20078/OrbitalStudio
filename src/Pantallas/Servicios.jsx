import "../Componentes/servicios.css";

export default function Servicios() {
  return (
    <div className="Servicios">
      <h1 className="Titulo">Nuestros Servicios Estratégicos: Impulsa tu Crecimiento</h1>
      <div className="lista-servicios">
        {/* Servicio: Desarrollo Web a Medida */}
        <div className="servicio">
          <h2 className="servicio-titulo">Desarrollo Web Personalizado: Tu Marca, Tu Éxito Digital</h2>
          <p className="servicio-descripcion">
            ¿Cansado de soluciones genéricas? Creamos sitios web a medida que no solo reflejan la identidad única de tu negocio, sino que están diseñados para convertir visitantes en clientes. Dale a tu marca la plataforma digital que se merece y observa cómo tus objetivos se hacen realidad.
          </p>
          <ul>
            <li>Diseño 100% exclusivo: Destácate y crea una impresión memorable.</li>
            <li>Experiencia de Usuario (UX) intuitiva: Mantén a tus visitantes comprometidos y guíalos a la acción.</li>
            <li>Optimización integral para SEO: Asegúrate de que tus clientes ideales te encuentren primero en Google.</li>
            <li>Adaptabilidad total (Responsive): Tu sitio se verá perfecto en cualquier dispositivo, desde móviles hasta desktops.</li>
          </ul>
          <span className="servicio-icono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </span>
        </div>

        {/* Servicio: Desarrollo de SaaS */}
        <div className="servicio">
          <h2 className="servicio-titulo">Desarrollo SaaS: Escalabilidad y Eficiencia en la Nube</h2>
          <p className="servicio-descripcion">
            Transforma tu idea en un producto rentable y escalable. Diseñamos y construimos soluciones de Software como Servicio (SaaS) que automatizan procesos complejos, optimizan recursos y abren nuevas fuentes de ingresos. Es el momento de llevar tu negocio al siguiente nivel de eficiencia y liderazgo.
          </p>
          <ul>
            <li>Integración sin fisuras: Conecta tu SaaS con sistemas existentes como ARCA, CRM o ERP para una gestión centralizada.</li>
            <li>Arquitectura robusta y escalable: Garantiza un rendimiento impecable, incluso con miles de usuarios.</li>
            <li>Modelos de monetización flexibles: Implementamos sistemas de pago y suscripción seguros para maximizar tus ganancias.</li>
            <li>Paneles de control inteligentes: Obtén visibilidad total y control sobre tus operaciones con métricas claras.</li>
          </ul>
          <span className="servicio-icono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}