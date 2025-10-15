import { useContext, useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AppContext } from "../contexto/ContextoApp";
import ListaLibros from "../componentes/ListaLibros";

export default function Original() {
  const { libros } = useContext(AppContext);
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState(null);

  // Contar cuántos libros hay por idioma
  const datosIdiomas = useMemo(() => {
    const conteo = {};
    libros.forEach((libro) => {
      const idioma = libro.languages[0];
      conteo[idioma] = (conteo[idioma] || 0) + 1;
    });

    return Object.entries(conteo).map(([idioma, cantidad]) => ({
      idioma,
      cantidad,
    }));
  }, [libros]);

  // Paleta de colores (puedes cambiarla)
  const colores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A855F7", "#F87171"];

  // Libros filtrados por idioma
  const librosFiltrados = idiomaSeleccionado
    ? libros.filter((l) => l.languages[0] === idiomaSeleccionado)
    : [];

  return (
    <div className="pagina">
      <h1>🌎 Explorador de idiomas</h1>
      <p>Haz clic en un idioma del gráfico para ver los libros disponibles.</p>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={datosIdiomas}
              dataKey="cantidad"
              nameKey="idioma"
              outerRadius={120}
              fill="#8884d8"
              onClick={(data) => setIdiomaSeleccionado(data.idioma)}
              label={({ idioma, cantidad }) => `${idioma} (${cantidad})`}
            >
              {datosIdiomas.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colores[index % colores.length]}
                  cursor="pointer"
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {idiomaSeleccionado && (
        <div className="resultado-idioma">
          <h2>
            Libros en idioma: <span>{idiomaSeleccionado}</span>
          </h2>
          <button onClick={() => setIdiomaSeleccionado(null)}>🔙 Volver al gráfico</button>
          <ListaLibros lista={librosFiltrados} />
        </div>
      )}
    </div>
  );
}
