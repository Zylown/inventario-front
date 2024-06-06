import { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import FilterInput from "../../sections/Inventario/FilterInput";
import Table from "../../sections/Inventario/ITable";
import Top from "../../sections/Inventario/Top";

export default function Inventary() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedField, setSelectedField] = useState<string>("producto");
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <Top />
        <FilterInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedField={selectedField}
          setSelectedField={setSelectedField}
        />
        <Table searchTerm={searchTerm} selectedField={selectedField} />
      </header>
    </HomeLayout>
  );
}
