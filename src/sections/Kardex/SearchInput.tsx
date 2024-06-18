import DatePicker, { registerLocale } from "react-datepicker";
import { TbCalendarSearch } from "react-icons/tb";
import { es } from "date-fns/locale";
import { format, parse } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { FilterKardexProps } from "../../types/FilterInput";
import { IoClose } from "react-icons/io5";

const locale = es;
registerLocale("es", locale);

export default function SearchInput({
  searchDate,
  setSearchDate,
}: FilterKardexProps) {
  const handleDateChange = (date: Date | null) => {
    if (date && setSearchDate) {
      setSearchDate(format(date, "dd-MM-yyyy"));
      console.log(format(date, "dd-MM-yyyy")); // Formatear la fecha cuando se cambia
    }
  };

  // Convertir searchDate a un objeto Date si no es null
  const parsedDate = searchDate
    ? parse(searchDate, "dd-MM-yyyy", new Date())
    : null;

  const handleClear = () => {
    if (searchDate && setSearchDate) {
      setSearchDate("");
    }
  };

  return (
    <div className="flex flex-grow sm:items-center sm:gap-9 gap-2 sm:flex-row flex-col">
      <label className="text-white font-semibold text-lg text-nowrap">
        Buscar fecha{" "}
      </label>
      <div className="w-full relative">
        <DatePicker
          locale={locale}
          selected={parsedDate}
          onChange={handleDateChange}
          className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
          dateFormat={" d MMMM, yyyy - dd/MM/yyyy"}
          icon={<TbCalendarSearch />}
          showIcon
          maxDate={new Date()}
          showMonthDropdown
          placeholderText="Seleccione una fecha"
        />
        <button
          className="absolute right-2 top-1 text-2xl"
          type="button"
          onClick={handleClear}
        >
          {searchDate && <IoClose />}
        </button>
      </div>
    </div>
  );
}
