import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./contexto/ContextoApp";

import Home from "./paginas/home";
import Filtro from "./paginas/filtro";
import Original from "./paginas/original";
import Informativa from "./paginas/informativa";
import Favoritos from "./paginas/favoritos";

import "./App.css";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/filtro">Filtro</Link>
          <Link to="/original">Original</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/informativa">Acerca</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtro" element={<Filtro />} />
          <Route path="/original" element={<Original />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/informativa" element={<Informativa />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
