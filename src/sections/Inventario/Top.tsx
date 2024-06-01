export default function Top() {
  return (
    <div className="flex justify-between text-white py-2 font-semibold flex-wrap items-center sm:gap-0 gap-2">
      <div className="wrapper__section text-lg">
        <h1>Productos</h1>
      </div>
      <div className="wrapper__btn flex gap-4">
        <button
          className="hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
          type="button"
        >
          Agregar
        </button>
        <button
          className="hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
          type="button"
        >
          Importar
        </button>
      </div>
    </div>
  );
}
