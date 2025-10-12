import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [libros, setLibros] = useState([]);
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  // 🔹 Cargar datos desde la API Gutendex
  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const resp = await axios.get("https://gutendex.com/books/?languages=es");
        setLibros(resp.data.results);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };
    fetchLibros();
  }, []);

  // 🔹 Guardar favoritos en localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (libro) => {
    setFavoritos((prev) =>
      prev.some((f) => f.id === libro.id)
        ? prev.filter((f) => f.id !== libro.id)
        : [...prev, libro]
    );
  };

  return (
    <AppContext.Provider value={{ libros, favoritos, toggleFavorito }}>
      {children}
    </AppContext.Provider>
  );
}
