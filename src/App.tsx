import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLayout from "./Layout/HomeLayout";
function App() {
  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
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
