import { IoCloseCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ModalAddData } from "../../types/Modal.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAddSchema } from "../../validations/FormAdd.validate";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  // children: React.ReactNode;
};

export default function ModalAgregar({
  isVisible,
  onClose,
}: // children,
ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalAddData>({
    resolver: zodResolver(FormAddSchema),
  });
  const [checkBox, setCheckBox] = useState(false);

  if (!isVisible) return null; // esto significa que si isVisible es false, no se muestra nada

  const onSubmit = async (e) => {
    console.log(e);
  };

  const handleChangeCheckBox = () => {
    setCheckBox(!checkBox);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-verde-claro w-5/12 p-4 rounded-lg flex flex-col items-center relative">
        <button
          type="button"
          className="hover:bg-verde-oscuro transition-all text-2xl rounded-lg absolute right-2 top-2"
          onClick={onClose}
        >
          <IoCloseCircle />
        </button>
        <h1 className="font-semibold text-white text-center mb-4">
          Agregar producto
        </h1>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            {checkBox ? (
              <input
                className="p-2 w-full bg-crema rounded-lg"
                type="text"
                placeholder="Categoría"
                {...register("categoria")}
              />
            ) : (
              <select
                className="p-2 w-full bg-crema rounded-lg"
                {...register("categoria")}
              >
                <option value="bolsa">BOLSA</option>
                <option value="todos">TODOS</option>
              </select>
            )}
            <input
              type="checkbox"
              onChange={handleChangeCheckBox}
              className="w-5"
            />
          </div>
          {errors.categoria && (
            <p className="text-red-500">{"* " + errors.categoria.message}</p>
          )}
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Nombre del producto"
            {...register("producto")}
          />
          {errors.producto && (
            <p className="text-red-500">{"* " + errors.producto.message}</p>
          )}
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Marca del producto"
            {...register("marca")}
          />
          {errors.marca && (
            <p className="text-red-500">{"* " + errors.marca.message}</p>
          )}
          <select
            className="p-2 w-full bg-crema rounded-lg"
            {...register("estado")}
          >
            <option value="1">Activo</option>
            <option value="0">Desactivo</option>
          </select>
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Stock"
            {...register("stock")}
          />
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Precio de compra"
            {...register("precioC")}
          />
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Precio de venta"
            {...register("precioV")}
          />
          <button
            type="submit"
            className="hover:opacity-90 transition-all bg-verde-oscuro px-4 py-2 rounded-lg text-white"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}
