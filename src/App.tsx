import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./Layout/HomeLayout";
import Kardex from "./pages/Kardex";
import Inventario from "./pages/Inventario";
function App() {
  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kardex" element={<Kardex />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 No encontrado</h1>
              </>
            }
          />
        </Routes>
      </HomeLayout>
    </>
  );
}

export default App;
