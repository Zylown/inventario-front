import { useForm } from "react-hook-form";
import { FormDatosProps } from "../../types/Ventas.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProductoSchema } from "../../validations/FormProducto.validate";

export default function DatosVentas({
  onAdd,
}: {
  onAdd: (data: FormDatosProps) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDatosProps>({
    resolver: zodResolver(FormProductoSchema),
  });

  const onSubmit = async (data: FormDatosProps) => {
    // console.log(data);
    if (onAdd) {
      onAdd(data);
      reset();
    }
  };

  const handleNameClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    // nameClient = e.target.value;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 items-center">
        <label className="text-white font-semibold text-lg text-nowrap">
          Datos Cliente
        </label>
        <input
          type="text"
          placeholder="Nombre del cliente"
          className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
          onChange={handleNameClient}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 lg:items-center">
        <label className="text-white font-semibold text-lg text-nowrap">
          Datos Producto
        </label>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex lg:flex-row flex-col gap-4 w-full"
        >
          <input
            type="number"
            placeholder="ID"
            className={`w-full lg:max-w-[100px] bg-crema p-2 rounded-lg outline-none transition-all ${
              errors.idProducto ? "border-2 border-red-500" : ""
            }`}
            {...register("idProducto")}
          />
          <input
            type="text"
            placeholder="Nombre del producto"
            className={`w-full p-2 bg-crema rounded-lg outline-none transition-all opacity-80
              ${errors.nombreProducto ? "border-2 border-red-500" : ""}`}
            // disabled
            {...register("nombreProducto")}
          />
          <input
            type="text"
            placeholder="Precio del producto"
            className={`w-full p-2 lg:max-w-[180px] bg-crema rounded-lg opacity-80 outline-none transition-all
              ${errors.precioProducto ? "border-2 border-red-500" : ""}`}
            // disabled
            {...register("precioProducto")}
          />
          <input
            type="number"
            placeholder="Cantidad del producto"
            className={`w-full lg:max-w-[180px] bg-crema p-2 rounded-lg outline-none transition-all
              ${errors.cantidadProducto ? "border-2 border-red-500" : ""}`}
            {...register("cantidadProducto")}
          />
          <button
            className="flex w-full text-center text-white font-semibold items-center hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg lg:max-w-[197px] justify-center"
            type="submit"
          >
            Agregar producto
          </button>
        </form>
      </div>
    </div>
  );
}
