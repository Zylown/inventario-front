import FilterInput from "../../sections/Inventario/FilterInput";
import Top from "../../sections/Inventario/Top";

export default function Inventary() {
  return (
    <header className="flex flex-col">
      <Top />
      <FilterInput />
    </header>
  );
}
