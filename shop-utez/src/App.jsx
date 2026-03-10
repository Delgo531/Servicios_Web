import { useState } from "react";
import Index from "./pages"
import Productos from "./pages/productos"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Users from "./pages/users";
import Login from "./pages/login";
import DetalleProducto from"./pages/DetalleProducto";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Index />}>
          <Route path="productos" element={<Productos />} />
          <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/productos/:id" element={<DetalleProducto/>}/>

        </Route>

        <Route
          path="/auth"
          element={
            isAuthenticated
              ? <Home />
              : <Navigate to="/login" />
          }
        >
          <Route path="users" element={<Users />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App