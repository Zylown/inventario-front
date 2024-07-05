import axios from "axios";
import { KardexProps } from "src/types/Kardex.types";

const API_URL = import.meta.env.VITE_API_URL;

//GET /kardex
export const getKardex = async () => {
  try {
    const response = await axios.get(`${API_URL}/kardex`, {
      withCredentials: true, // Asegura que las credenciales se envíen con la solicitud
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//POST /kardex
export const createKardex = async (data: KardexProps) => {
  try {
    const response = await axios.post(`${API_URL}/kardex`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};