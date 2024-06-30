import axios from "axios";
import { InventarioProps } from "src/types/Inventario.types";

const API_URL = import.meta.env.VITE_API_URL;

//GET /inventario
export const getInventario = async () => {
  try {
    const response = await axios.get(`${API_URL}/inventario`, {
      withCredentials: true, // Asegura que las credenciales se envíen con la solicitud
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//POST /inventario
export const addInventario = async (data: InventarioProps) => {
  try {
    const response = await axios.post(`${API_URL}/inventario`, data, {
      withCredentials: true, // Asegura que las credenciales se envíen con la solicitud
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//PUT /inventario/:id
export const editInventario = async (id: number, data: InventarioProps) => {
  try {
    const response = await axios.put(`${API_URL}/inventario/${id}`, data, {
      withCredentials: true, // Asegura que las credenciales se envíen con la solicitud
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
