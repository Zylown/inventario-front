import { useState } from "react";
import DatePicker from "react-datepicker";
import { TbCalendarSearch } from "react-icons/tb";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchInput() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log(date?.toISOString().split("T")[0]);
  };
  return (
    <div className="flex flex-grow sm:items-center sm:gap-9 gap-2 sm:flex-row flex-col">
      <label className="text-white font-semibold text-lg text-nowrap">
        Buscar fecha{" "}
      </label>
      <div className="w-full">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
          dateFormat={"dd/MM/yyyy"}
          icon={<TbCalendarSearch />}
          showIcon
        />
      </div>
    </div>
  );
}
