import axios from "axios";

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
