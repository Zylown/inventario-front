import { IoSearch, IoClose } from "react-icons/io5";
import OptionsFilter from "../../components/OptionsFilter.tsx";
import { FilterInventarioProps } from "../../types/Inventario.types.ts";

export default function FilterInput({
  searchTerm,
  setSearchTerm,
  selectedField,
  setSelectedField,
}: FilterInventarioProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm) {
      // si setSearchTerm existe
      setSearchTerm(e.target.value); // esta función es para cambiar el valor del input y se lo asigna al estado
    }
  };

  const handleClear = () => {
    if (searchTerm && setSearchTerm) {
      // si hay algo en el input se limpia
      setSearchTerm("");
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setSelectedField) {
      //esta funcion es para cambiar el valor del select y se lo asigna al estado
      setSelectedField(e.target.value);
    }
  };

  return (
    <div className="flex py-2 sm:items-center items-stretch justify-between flex-wrap sm:flex-row flex-col sm:gap-0 gap-2">
      {/* (sm:gap-0 gap-2) significa que en pantallas grandes(sm:gap-0) no habrá espacio entre los elementos, pero en pantallas pequeñas(gap-2) sí. la idea hasta sm se aplican sus elementos pero si es menos que sm ya el otro gap-2, se aplica esto hasta que sea 640px osea sm pasado eso ya lo otro*/}
      <div className="flex sm:flex-row flex-col w-full sm:gap-4 gap-6">
        <div className="flex flex-grow items-center sm:gap-9 gap-2">
          <div className="text-white font-semibold text-lg">
            <label>Buscar </label>
          </div>
          <div className="flex w-full relative items-center">
            <input
              className="p-2 w-full bg-crema rounded-lg outline-none"
              type="text"
              placeholder="Escriba para filtrar por producto"
              value={searchTerm} // [3] Asignar el valor del estado al input
              onChange={handleSearch} // [4] Asignar la función al evento onChange
            />
            <button
              className="absolute right-2 text-2xl"
              type="button"
              onClick={handleClear}
            >
              {searchTerm ? <IoClose /> : <IoSearch />}
            </button>
          </div>
        </div>
        <div className="options sm:w-[204px] w-full">
          <select
            className="w-full hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg text-white"
            value={selectedField}
            onChange={handleFieldChange}
          >
            <OptionsFilter />
          </select>
        </div>
      </div>
    </div>
  );
}
