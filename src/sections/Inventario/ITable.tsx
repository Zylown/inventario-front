import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
// import data from "../../data.json";
import { useEffect, useState, useMemo } from "react";
import { ITableProps } from "../../types/ITable.ts";
import { InventarioProps } from "../../types/Modal.type";
import ModalEdit from "./ModalEdit";
import { useStore } from "../../context/store.ts";

export default function Table({ searchTerm, selectedField }: ITableProps) {
  const products = useStore((state) => state.products); // Obtener productos del store
  const editProduct = useStore((state) => state.editProduct); // Obtener función para editar producto del store

  const [inventario, setInventario] = useState<InventarioProps[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]); // [1] Crear estado para el ordenamiento
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRow, setEditingRow] = useState<InventarioProps | null>(null);
  const columnHelper = createColumnHelper<InventarioProps>();

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

  useEffect(() => {
    setInventario(products); // Inicializa el inventario con los productos del store
    console.log("Products updated:", products);
  }, [products]);

  const handleRowClick = (row: InventarioProps) => {
    setEditingRow(row);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setEditingRow(null);
  };

  const handleEdit = (updatedData: InventarioProps) => {
    console.log("Editing product:", updatedData);
    editProduct(updatedData);
    setIsModalVisible(false);
    setEditingRow(null);
  };

  /*
  useMemo memoriza el resultado de la función que pasa como primer argumento y solo la vuelve a ejecutar si alguna de las dependencias (inventario, searchTerm, sorting) cambia. Esto mejora el rendimiento al evitar cálculos innecesarios en cada renderizado.
  */
  const filteredData = useMemo(() => {
    if (!selectedField) return inventario; // Si no se ha seleccionado un campo para filtrar, devolver todos los datos

    // Filtrar los datos de inventario basándose en el término de búsqueda
    let filtered = inventario.filter((item) =>
      item[selectedField as keyof InventarioProps]
        .toString()
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase())
    );

    // Si hay criterios de ordenamiento definidos
    if (sorting.length) {
      const sort = sorting[0]; // Obtener el primer criterio de ordenamiento
      filtered = filtered.sort((a, b) => {
        // Obtener los valores de los elementos a y b para la columna de ordenamiento actual
        const aValue = a[sort.id as keyof InventarioProps]; // Obtener el valor de la propiedad de a que corresponde a la columna de ordenamiento actual (sort.id) y asignarlo a aValue (aValue es de tipo any)
        const bValue = b[sort.id as keyof InventarioProps];

        // Comparar los valores para determinar el orden
        if (aValue < bValue) return sort.desc ? 1 : -1; // Ordenar ascendente o descendente según la dirección especificada
        if (aValue > bValue) return sort.desc ? -1 : 1; // Ordenar ascendente o descendente según la dirección especificada
        return 0; // Si los valores son iguales, no cambiar el orden
      });
    }

    // Devolver los datos filtrados y ordenados
    return filtered;
  }, [inventario, searchTerm, sorting, selectedField]); // Ejecutar este useMemo solo cuando inventario, searchTerm o sorting cambien

  const table = useReactTable({
    data: filteredData,
    columns,
    // debugTable: true,
    getCoreRowModel: getCoreRowModel(), // es una función que se encarga de manejar los datos de la tabla
    state: {
      sorting,
    },
    onSortingChange: setSorting, // [5] Asignar la función para actualizar el estado del ordenamiento
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
              className="text-center text-white cursor-pointer hover:bg-gray-200 hover:bg-opacity-10"
              onClick={() => handleRowClick(row.original)}
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
      {editingRow && (
        <ModalEdit
          isVisible={isModalVisible}
          onClose={handleModalClose}
          initialData={editingRow}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
