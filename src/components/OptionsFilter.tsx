import { InventarioProps } from "../types/Inventario.types";

export default function OptionsFilter() {
  const inventarioKeys = Object.keys({
    id: "",
    producto: "",
    categoria: "",
    marca: "",
    estado: "",
    stock: 0,
    precioC: 0,
    precioV: 0,
  } as InventarioProps);

  return (
    <>
      {inventarioKeys.map((key) => (
        <option key={key} value={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </option>
      ))}
    </>
  );
}
