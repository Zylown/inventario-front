import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { KardexProps } from "../../types/Kardex.types";
import { useEffect, useMemo, useState } from "react";
import { useKardexStore } from "../../context/KardexStore";
import { FilterKardexProps } from "../../types/Kardex.types";
import { parse, format } from "date-fns";

export default function KTable({ searchDate }: FilterKardexProps) {
  const dataKardex = useKardexStore((state) => state.kardex);
  const [kardex, setKardex] = useState<KardexProps[]>([]);

  const columnHelper = createColumnHelper<KardexProps>();

  const columns = [
    // columnHelper.accessor("id", {
    //   header: () => "ID",
    //   cell: (info) => info.getValue(),
    // }),
    columnHelper.accessor("fecha", {
      header: () => "Fecha",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("hora", {
      header: () => "Hora",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("producto", {
      header: () => "Producto",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("descripcion", {
      header: () => "Descripción",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("agente", {
      header: () => "Agente",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("nombre", {
      header: () => "Nombre",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("inicial", {
      header: () => "Inicial",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("entrada", {
      header: () => "Entrada",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("salida", {
      header: () => "Salida",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("final", {
      header: () => "Final",
      cell: (info) => info.getValue(),
    }),
  ];

  useEffect(() => {
    setKardex(dataKardex);
  }, [dataKardex]);

  // Filtrar los datos por la fecha seleccionada
  const filteredDate = useMemo(() => {
    if (!searchDate) return kardex;
    return kardex.filter((item) => {
      const itemDate = format(
        parse(item.fecha, "dd/MM/yyyy", new Date()),
        "dd-MM-yyyy"
      );
      return itemDate === searchDate;
    });
  }, [searchDate, kardex]);

  const getRowClassName = (descripcion: string) => {
    if (descripcion.toLowerCase() === "venta") {
      return "bg-red-900";
    } else if (descripcion.toLowerCase() === "compras") {
      return "bg-green-900";
    }
    return "";
  };

  const table = useReactTable({
    // data: kardex,
    data: filteredDate,
    columns,
    getCoreRowModel: getCoreRowModel(), // es una función que se encarga de manejar los datos de la tabla
  });

  return (
    <div className="pt-2 overflow-x-auto h-[70vh]">
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
                  <div
                    {...{
                      className: column.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: column.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      column.column.columnDef.header,
                      column.getContext()
                    )}
                    {{ asc: " ↑", desc: " ↓" }[
                      column.column.getIsSorted() as string
                    ] ?? null}
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
              className={`text-center text-white cursor-pointer hover:bg-opacity-80 ${getRowClassName(
                row.original.descripcion
              )}`}
            >
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
