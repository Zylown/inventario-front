import { IoCloseCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAddSchema } from "../../validations/FormAdd.validate";
import { InventarioProps, ModalProps } from "../../types/Inventario.types";
import { useEffect } from "react";
import axios from "axios";

export default function ModalEdit({
  isVisible,
  onClose,
  initialData,
  onEdit,
}: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InventarioProps>({
    resolver: zodResolver(FormAddSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    isVisible && reset(initialData);
  }, [isVisible, initialData, reset]);

  if (!isVisible) return null;

  const onSubmit = async (data: InventarioProps) => {
    console.log("Data to edit:", data);
    if (initialData) {
      const updatedData = {
        ...data,
        id: initialData.id, // Mantener el ID original del producto
      };
      try {
        const response = await axios.put(
          `http://localhost:3000/inventario/${initialData.id}`,
          updatedData
        );
        console.log("Edit response:", response.data);
        if (onEdit) {
          onEdit(response.data);
        }
      } catch (error) {
        console.error("Error editing product:", error);
      }
    }

    onClose();
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
          Editar producto
        </h1>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4">
            <select
              className="p-2 w-full bg-crema rounded-lg"
              {...register("categoria")}
            >
              <option value="TODOS">TODOS</option>
              <option value="JUGUETES">JUGUETES</option>
              <option value="ROPA">ROPA</option>
              <option value="ELECTRONICA">ELECTRONICA</option>
              <option value="LIBROS">LIBROS</option>
            </select>
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
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Stock"
            {...register("stock", { valueAsNumber: true })}
          />
          {errors.stock && (
            <p className="text-red-500">{"* " + errors.stock.message}</p>
          )}
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Precio de compra"
            {...register("precioC", { valueAsNumber: true })}
          />
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Precio de venta"
            {...register("precioV", { valueAsNumber: true })}
          />
          <button
            type="submit"
            className="hover:opacity-90 transition-all bg-verde-oscuro px-4 py-2 rounded-lg text-white"
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
}
