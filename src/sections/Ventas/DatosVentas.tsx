export default function DatosVentas() {
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
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 items-center">
        <label className="text-white font-semibold text-lg text-nowrap">
          Datos Producto
        </label>
        <div className="flex sm:flex-row flex-col gap-4 w-full">
          <input
            type="number"
            placeholder="ID"
            className="w-full sm:max-w-[100px] p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
          />
          <input
            type="text"
            placeholder="Nombre del producto"
            className="w-full p-2 bg-crema rounded-lg outline-none transition-all opacity-80"
            disabled
          />
          <input
            type="text"
            placeholder="Precio del producto"
            className="w-full p-2 bg-crema rounded-lg outline-none transition-all opacity-80"
            disabled
          />
          <input
            type="number"
            placeholder="Cantidad del producto"
            className="w-full sm:max-w-[197px] p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
          />
        </div>
      </div>
    </div>
  );
}
