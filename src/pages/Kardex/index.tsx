import HomeLayout from "../../layout/HomeLayout";
import KTable from "../../sections/Kardex/KTable";
import SearchInput from "../../sections/Kardex/SearchInput";
import TopKardex from "../../sections/Kardex/TopKardex";

export default function Kardex() {
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <TopKardex />
        <SearchInput />
        <KTable />
      </header>
    </HomeLayout>
  );
}
