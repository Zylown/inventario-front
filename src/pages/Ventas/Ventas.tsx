import HomeLayout from "../../layout/HomeLayout";
import DatosVentas from "../../sections/Ventas/DatosVentas";
import TopVentas from "../../sections/Ventas/TopVentas";
import VTable from "../../sections/Ventas/VTable";
import { useVentasStore } from "../../context/VentasStore";
import { FormDatosProps, VentasProps } from "../../types/Ventas.types";
import { useState } from "react";

export default function Ventas() {
  const addVenta = useVentasStore((state) => state.addVenta);
  const [numeroProducto, setNumeroProducto] = useState(1); // Inicializar en 1

  const handleAddVenta = (data: FormDatosProps) => {
    const total = parseFloat(data.precioProducto) * data.cantidadProducto; // Asegúrate de convertir precioProducto a número
    const venta: VentasProps = {
      numeroVentaProducto: numeroProducto, // Utiliza el estado del contador
      nombreVentaProducto: data.nombreProducto,
      precioVentaProducto: parseFloat(data.precioProducto), // Convertir a número
      cantidadVentaProducto: data.cantidadProducto,
      total,
    };
    addVenta(venta);
    setNumeroProducto(numeroProducto + 1); // Incrementa el contador en 1
  };

  return (
    <HomeLayout>
      <header className="flex flex-col gap-4">
        <TopVentas />
        <DatosVentas onAdd={handleAddVenta} />
        <VTable />
      </header>
    </HomeLayout>
  );
}
