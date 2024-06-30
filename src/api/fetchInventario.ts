import axios from "axios";
import { InventarioProps } from "src/types/Inventario.types";

const API_URL = import.meta.env.VITE_API_URL;

//GET /inventario
export const getInventario = async () => {
  try {
    const response = await axios.get(`${API_URL}/inventario`);
    // console.log("Data fetched:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//POST /inventario
export const addInventario = async (data: InventarioProps) => {
  try {
    const response = await axios.post(`${API_URL}/inventario`, data);
    // console.log("Data added:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//PUT /inventario/:id
export const editInventario = async (id: number, data: InventarioProps) => {
  try {
    const response = await axios.put(`${API_URL}/inventario/${id}`, data);
    // console.log("Data edited:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
