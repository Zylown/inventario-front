import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { VentasProps } from "../../types/Ventas.types";
import { MdAddShoppingCart } from "react-icons/md";

export default function VTable() {
  const columnHelper = createColumnHelper<VentasProps>();

  const columns = [
    columnHelper.accessor("num", {
      header: () => "NRO",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("producto", {
      header: () => "Producto",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("precio", {
      header: () => "Precio",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cantidad", {
      header: () => "Cantidad",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total", {
      header: () => "Total",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>
        <div className="flex justify-end items-center">
          <label className="text-white font-semibold sm:text-lg text-nowrap mr-4">
            NRO. SERIE
          </label>
          <input
            type="text"
            className="p-2 bg-crema rounded-lg outline-none transition-all opacity-80"
            disabled
          />
        </div>
        <div className="pt-2 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="text-white bg-verde-oscuro sticky -top-2"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      className="px-4 py-2 text-center md:text-base text-sm"
                    >
                      <div>
                        {flexRender(
                          column.column.columnDef.header,
                          column.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="text-center text-white cursor-pointer hover:bg-gray-200 hover:bg-opacity-10"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="sm:px-4 sm:py-2 px-1 py-2 md:text-base text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end text-white font-semibold">
          <button
            className="flex items-center hover:bg-verde-oscuro transition-all bg-verde-claro px-4 py-2 rounded-lg"
            type="button"
          >
            <MdAddShoppingCart />
            <span className="ml-0.5">Generar Venta</span>
          </button>
        </div>
      </div>
    </>
  );
}
