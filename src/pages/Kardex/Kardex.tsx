import { useState } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import KTable from "../../sections/Kardex/KTable";
import SearchInput from "../../sections/Kardex/SearchInput";
import TopKardex from "../../sections/Kardex/TopKardex";

export default function Kardex() {
  const [searchDate, setSearchDate] = useState<string>("");
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <TopKardex />
        <SearchInput searchDate={searchDate} setSearchDate={setSearchDate} />
        <KTable searchDate={searchDate} />
      </header>
    </HomeLayout>
  );
}
