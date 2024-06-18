import HomeLayout from "../../layout/HomeLayout";
import DatosVentas from "../../sections/Ventas/DatosVentas";
import TopVentas from "../../sections/Ventas/TopVentas";

export default function Ventas() {
  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <TopVentas />
        <DatosVentas />
      </header>
    </HomeLayout>
  );
}
