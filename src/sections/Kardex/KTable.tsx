import { createColumnHelper } from "@tanstack/react-table";
import { KTableProps } from "../../types/Table";

export default function KTable() {
  const columnHelper = createColumnHelper<KTableProps>();
  const columns = [];
  return <div>KTable</div>;
}
