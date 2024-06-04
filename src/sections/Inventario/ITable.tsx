import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import data from "../../data.json";
import { useEffect, useState } from "react";

export default function Table() {
  type inventario = {
    id: string;
    categoria: string;
    producto: string;
    marca: string;
    estado: string;
    stock: number;
    precioC: number;
    precioV: number;
  };

  const columnHelper = createColumnHelper<inventario>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("categoria", {
      header: () => "Categoría",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("producto", {
      header: () => "Producto",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("marca", {
      header: () => "Marca",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("estado", {
      header: () => "Estado",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("stock", {
      header: () => "Stock",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("precioC", {
      header: () => "Precio Compra",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("precioV", {
      header: () => "Precio Venta",
      cell: (info) => info.getValue(),
    }),
  ];

  const [inventario, setInventario] = useState<inventario[]>([]);

  useEffect(() => {
    setInventario(data);
  }, []);

  const table = useReactTable({
    data: inventario,
    columns,
    // debugTable: true,
    getCoreRowModel: getCoreRowModel(), // es una función que se encarga de manejar los datos de la tabla
  });

  return (
    <div className="pt-2 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-white bg-verde-oscuro">
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
            <tr key={row.id} className="text-center text-white">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="sm:px-4 sm:py-2 px-1 py-2 md:text-base text-sm"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
/*
<tr>
            <th>Id</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
            </tr>
          </tbody>
*/
