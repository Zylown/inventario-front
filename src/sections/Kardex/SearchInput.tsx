import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchInput() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  //2024-06-05 o 2024-12-28
  return (
    <div className="flex flex-grow items-center sm:gap-9 gap-2">
      <label className="text-white font-semibold text-lg text-nowrap">
        Buscar fecha{" "}
      </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-full p-2 bg-crema rounded-lg outline-none"
      />
    </div>
  );
}
{
  /* <input
        className="w-full p-2 bg-crema rounded-lg outline-none"
        type="date"
        onChange={(e) => console.log(e.target.value)}
      /> */
}
