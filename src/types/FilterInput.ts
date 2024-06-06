export interface FilterInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedField: string;
  setSelectedField: (field: string) => void;
}
