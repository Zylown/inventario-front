import axios from "axios";
import { InventarioProps } from "src/types/Inventario.types";

const BASE_URL = "http://localhost:3000";

//GET /inventario
export const getInventario = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/inventario`);
    // console.log("Data fetched:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//POST /inventario
export const addInventario = async (data: InventarioProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/inventario`, data);
    // console.log("Data added:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
