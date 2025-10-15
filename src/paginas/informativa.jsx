export default function Informativa() {
  return (
    <div className="pagina">
      <h1>ℹ️ Acerca de la API Gutendex</h1>
      <p>
        <a href="https://gutendex.com/" target="_blank" rel="noopener noreferrer">
          Gutendex
        </a>{" "}
        es una API pública basada en el Proyecto Gutenberg, que ofrece acceso libre a
        miles de libros digitales de dominio público.
      </p>

      <p>
        Permite consultar obras por título, autor, idioma, temas y otros criterios,
        facilitando la integración de catálogos literarios en aplicaciones y proyectos web.
      </p>

      <p>
        En este caso, la API se utiliza para mostrar libros en distintos idiomas —
        <b>español</b>, <b>inglés</b>, <b>francés</b> y <b>alemán</b>—,
        demostrando su versatilidad y alcance cultural.
      </p>
    </div>
  );
}
