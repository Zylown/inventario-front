import { inventario } from "../types/Table";

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
  } as inventario);

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
