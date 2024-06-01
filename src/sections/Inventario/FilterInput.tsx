import { IoSearch } from "react-icons/io5";

export default function FilterInput() {
  return (
    <div className="flex py-2 sm:items-center items-stretch justify-between flex-wrap sm:flex-row flex-col sm:gap-0 gap-2">
      {/* (sm:gap-0 gap-2) significa que en pantallas grandes(sm:gap-0) no habrá espacio entre los elementos, pero en pantallas pequeñas(gap-2) sí. la idea hasta sm se aplican sus elementos pero si es menos que sm ya el otro gap-2, se aplica esto hasta que sea
      640px osea sm pasado eso ya lo otro*/}
      <div className="text-white font-semibold text-lg">
        <label>Buscar </label>
      </div>
      <div className="flex relative items-center flex-grow sm:ml-9">
        <input
          className="p-2 w-full bg-crema rounded-lg text-white"
          type="text"
          placeholder="Escriba para filtrar"
        />
        <button className="absolute right-1" type="button">
          <IoSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
}
