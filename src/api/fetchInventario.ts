import axios from "axios";

const BASE_URL = "http://localhost:3000";

//GET /inventario
export const fetchInventario = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/inventario`);
    // console.log("Data fetched:", response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//POST /inventario
