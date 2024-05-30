import { IoSearch } from "react-icons/io5";

export default function FilterInput() {
  return (
    <div className="flex">
      <label>Buscar: </label>
      <div className="flex relative items-center">
        <input type="text" placeholder="Escriba para filtrar" />
        <button type="button" className="absolute right-1">
          <IoSearch />
        </button>
      </div>
    </div>
  );
}
