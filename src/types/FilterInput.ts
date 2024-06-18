export interface FilterInventarioProps {
  searchTerm: string;
  setSearchTerm?: (term: string) => void;
  selectedField: string;
  setSelectedField?: (field: string) => void;
}

export interface FilterKardexProps {
  searchDate: string;
  setSearchDate?: (date: string) => void;
}