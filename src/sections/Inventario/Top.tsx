import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ModalAgregar from "./ModalAdd";
import { useInventarioStore } from "../../context/InventarioStore";
import { InventarioProps } from "../../types/Inventario.types";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const products = useInventarioStore((state) => state.products); // Obtener productos del store
  const addProduct = useInventarioStore((state) => state.addProduct); // es una función que se obtiene del store

  const handleBack = () => {
    navigate("/");
  };

  const handleAdd = (product: InventarioProps) => {
    const maxId = products.reduce(
      (max, product) => Math.max(max, parseInt(product.id.toString(), 10)),
      0
    );
    const newProduct = { ...product, id: (maxId + 1).toString() };
    addProduct(newProduct);
  };

  return (
    <>
      <div className="flex justify-between text-white py-2 font-semibold flex-wrap items-center sm:gap-0 gap-2">
        <div className="sm:flex hidden">
          <button
            type="button"
            className="flex items-center hover:bg-verde-oscuro transition-all bg-verde-claro px-3 py-2 rounded-lg"
            onClick={handleBack}
          >
            <IoArrowBack />
            <span className="ml-0.5">Regresar</span>
          </button>
        </div>
        <div className="wrapper__section text-lg">
          <h1>Productos</h1>
        </div>
        <div className="wrapper__btn flex gap-4">
          <button
            className="hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
            type="button"
            onClick={() => setIsVisible(true)}
          >
            Agregar
          </button>
          {/* <button
            className="hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
            type="button"
          >
            Importar
          </button> */}
        </div>
      </div>
      {isVisible && (
        <ModalAgregar
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          onAdd={handleAdd}
        />
      )}
    </>
  );
}
