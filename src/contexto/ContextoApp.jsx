import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [libros, setLibros] = useState([]);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );
  const [cargando, setCargando] = useState(true);

  // 🔹 Cargar datos desde la API Gutendex con varios idiomas
  useEffect(() => {
    const fetchLibros = async () => {
      try {
        setCargando(true);

        // 🌍 Llamadas a la API para 4 idiomas diferentes
        const urls = [
          "https://gutendex.com/books/?languages=es",
          "https://gutendex.com/books/?languages=en",
          "https://gutendex.com/books/?languages=fr",
          "https://gutendex.com/books/?languages=de",
        ];

        // 🔹 Ejecutar todas las peticiones en paralelo
        const respuestas = await Promise.all(urls.map((url) => axios.get(url)));

        // 🔹 Combinar los resultados
        const combinados = respuestas.flatMap((r) => r.data.results);

        // 🔹 Filtrar libros válidos con idioma definido
        const datosValidos = combinados.filter(
          (libro) => libro.languages && libro.languages.length > 0
        );

        setLibros(datosValidos);
      } catch (error) {
        console.error("⚠️ Error al obtener libros:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchLibros();
  }, []);

  // 🔹 Guardar favoritos en localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // 🔹 Agregar o quitar favoritos
  const toggleFavorito = (libro) => {
    setFavoritos((prev) =>
      prev.some((f) => f.id === libro.id)
        ? prev.filter((f) => f.id !== libro.id)
        : [...prev, libro]
    );
  };

  return (
    <AppContext.Provider
      value={{
        libros,
        favoritos,
        toggleFavorito,
        cargando,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
