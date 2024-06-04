import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function FilterInput() {
  const [searchTerm, setSearchTerm] = useState<string>(""); // [1] Crear estado para el valor del input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // [2] Crear función para actualizar el estado
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex py-2 sm:items-center items-stretch justify-between flex-wrap sm:flex-row flex-col sm:gap-0 gap-2">
      {/* (sm:gap-0 gap-2) significa que en pantallas grandes(sm:gap-0) no habrá espacio entre los elementos, pero en pantallas pequeñas(gap-2) sí. la idea hasta sm se aplican sus elementos pero si es menos que sm ya el otro gap-2, se aplica esto hasta que sea
      640px osea sm pasado eso ya lo otro*/}
      <div className="text-white font-semibold text-lg">
        <label>Buscar </label>
      </div>
      <div className="flex relative items-center flex-grow sm:ml-9">
        <input
          className="p-2 w-full bg-crema rounded-lg outline-none"
          type="text"
          placeholder="Escriba para filtrar por producto"
          value={searchTerm} // [3] Asignar el valor del estado al input
          onChange={handleSearch} // [4] Asignar la función al evento onChange
        />
        <button className="absolute right-1" type="button">
          <IoSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
}
