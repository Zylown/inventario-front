import { IoCloseCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();

  if (!isVisible) return null; // esto significa que si isVisible es false, no se muestra nada

  const onSubmit = async (e) => {
    console.log(e);
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
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Categoria"
            {...register("categoria")}
          />
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Nombre del producto"
            {...register("producto")}
          />
          <input
            type="text"
            className="p-2 w-full bg-crema rounded-lg"
            placeholder="Marca del producto"
            {...register("marca")}
          />
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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
