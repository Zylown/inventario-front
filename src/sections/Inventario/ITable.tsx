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
  ];

  const [inventario, setInventario] = useState<inventario[]>([]);

  useEffect(() => {
    setInventario(data);
  }, []);

  const table = useReactTable({
    data: inventario,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(), // es una función que se encarga de manejar los datos de la tabla
  });

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} className="px-4 py-2 text-center">
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
            <tr key={row.id} className="text-center">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2">
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
