import { IoIosClose } from "react-icons/io";
import { PDFViewer } from "@react-pdf/renderer";
import Doc from "./Doc";
import { DocPrintProps } from "../../types/Ventas.types";
import { useVentasStore } from "../../context/VentasStore";

export default function PrintVenta({ handleCloseModal }: DocPrintProps) {
  const ventas = useVentasStore((state) => state.ventas);

  const data = () => {
    const newVenta = ventas.map((venta) => {
      return {
        numeroVentaProducto: venta.numeroVentaProducto,
        nombreVentaProducto: venta.nombreVentaProducto,
        precioVentaProducto: venta.precioVentaProducto,
        cantidadVentaProducto: venta.cantidadVentaProducto,
        total: venta.precioVentaProducto * venta.cantidadVentaProducto,
      };
    });
    return {
      data: newVenta,
      pagoTotal: Number(newVenta
        .reduce((acc, venta) => acc + venta.total, 0)
        .toFixed(2)),
    };
  };
  //   console.log("Data:", data());

  const { data: newVenta, pagoTotal } = data();

  const handleClose = () => {
    if (handleCloseModal) {
      handleCloseModal();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#222222] bg-opacity-75 z-50">
      <div className="md:w-3/4 w-full relative rounded-lg py-7 px-9 bg-gray-700 text-center">
        <div className="absolute top-2 right-2">
          <IoIosClose
            className="text-3xl text-white cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl tracking-wide text-white font-semibold">
            Imprimir boleta
          </h1>
          <PDFViewer width="100%" height="500">
            <Doc data={newVenta} pagoTotal={pagoTotal} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
