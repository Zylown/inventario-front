import HomeLayout from "../../Layout/HomeLayout";
import FilterInput from "../../sections/Inventario/FilterInput";
import Table from "../../sections/Inventario/ITable";
import Top from "../../sections/Inventario/Top";

export default function Inventary() {
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <Top />
        <FilterInput />
        <Table />
      </header>
    </HomeLayout>
  );
}
