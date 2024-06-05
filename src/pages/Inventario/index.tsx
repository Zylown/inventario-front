import { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import FilterInput from "../../sections/Inventario/FilterInput";
import Table from "../../sections/Inventario/ITable";
import Top from "../../sections/Inventario/Top";

export default function Inventary() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <Top />
        <FilterInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table searchTerm={searchTerm} />
      </header>
    </HomeLayout>
  );
}
