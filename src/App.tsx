import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kardex from "./pages/Kardex/Kardex";
import Inventario from "./pages/Inventario/Inventario";
import Ventas from "./pages/Ventas/Ventas";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/kardex" element={<Kardex />} />
        <Route
          path="*"
          element={
            <>
              <h1>404 No encontrado</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
