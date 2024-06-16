import HomeLayout from "../../layout/HomeLayout";
import SearchInput from "../../sections/Kardex/SearchInput";
import TopKardex from "../../sections/Kardex/TopKardex";

export default function Kardex() {
  return (
    <HomeLayout>
      <TopKardex />
      <SearchInput />
    </HomeLayout>
  );
}
