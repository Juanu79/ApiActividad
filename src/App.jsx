import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./contexto/ContextoApp";

// Páginas
import Home from "./paginas/home";
import Filtro from "./paginas/filtro";
import Original from "./paginas/original";
import Informativa from "./paginas/informativa";
import Favoritos from "./paginas/favoritos";
import DetalleLibros from "./componentes/DetalleLibros"; // 👈 importante, import del detalle

import "./App.css";

export default function App() {
  return (
    <AppProvider>
      <Router>
        {/* Menú de navegación */}
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/filtro">Filtro</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/informativa">Acerca</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtro" element={<Filtro />} />
          <Route path="/original" element={<Original />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/informativa" element={<Informativa />} />

          {/* 👇 Nueva ruta para ver el detalle de un libro */}
          <Route path="/detalle/:id" element={<DetalleLibros />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
