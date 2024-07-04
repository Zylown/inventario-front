import { IoCloseCircle } from "react-icons/io5";
import { KardexProps, ModalPropsKardex } from "src/types/Kardex.types";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAddSchemaKardex } from "../../validations/FormAddKardex.validate";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import { format, parse } from "date-fns";
import { useState } from "react";

const locale = es;
registerLocale("es", locale);

export default function ModalAddKardex({
  isVisible,
  onClose,
}: ModalPropsKardex) {
  const { control, handleSubmit, reset, setValue } = useForm<KardexProps>({
    resolver: zodResolver(FormAddSchemaKardex),
  });

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  if (!isVisible) return null;

  const onSubmit = async (data: KardexProps) => {
    const formattedDate = date ? format(date, "dd/MM/yyyy") : "";
    const formattedTime = time ? format(time, "HH:mm") : "";
    const formData = { ...data, fecha: formattedDate, hora: formattedTime };
    console.log(formData);
    if (onClose) {
      onClose();
    }
    if (reset) {
      reset();
      setDate(null); // reset date
      setTime(null); // reset time
    }
  };

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, "dd/MM/yyyy") : "";
    setValue("fecha", formattedDate);
    setDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    const formattedTime = time ? format(time, "HH:mm") : "";
    setValue("hora", formattedTime);
    setTime(time);
  };

  const parsedDate = date
    ? parse(format(date, "dd/MM/yyyy"), "dd/MM/yyyy", new Date())
    : null;
  const parsedTime = time
    ? parse(format(time, "HH:mm"), "HH:mm", new Date())
    : null;

  return isVisible ? (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-verde-claro sm:w-5/12 w-full mx-2 p-4 rounded-lg flex flex-col items-center relative">
        <button
          type="button"
          className="hover:bg-verde-oscuro transition-all text-2xl rounded-lg absolute right-2 top-2"
          onClick={onClose}
        >
          <IoCloseCircle />
        </button>
        <h1 className="font-semibold text-white text-center mb-4">
          Agregar producto
        </h1>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-2/4">
                <Controller
                  control={control}
                  name="fecha"
                  defaultValue=""
                  render={({ field }) => (
                    <DatePicker
                      locale={locale}
                      className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
                      dateFormat="dd/MM/yyyy"
                      maxDate={new Date()}
                      showMonthDropdown
                      placeholderText="Seleccione una fecha"
                      todayButton="Hoy"
                      selected={
                        field.value
                          ? parse(field.value, "dd/MM/yyyy", new Date())
                          : parsedDate
                      }
                      onChange={handleDateChange}
                    />
                  )}
                />
              </div>
              <div className="w-2/4">
                <Controller
                  control={control}
                  name="hora" // lo del name es el nombre del campo en el schema
                  defaultValue=""
                  render={({ field }) => (
                    <DatePicker
                      locale={locale}
                      className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={1}
                      timeCaption="Hora"
                      dateFormat="HH:mm"
                      placeholderText="Seleccione una hora"
                      selected={
                        field.value
                          ? parse(field.value, "HH:mm", new Date())
                          : parsedTime
                      }
                      onChange={handleTimeChange}
                    />
                  )}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Producto"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("producto")}
            />
            <input
              type="text"
              placeholder="Descripción"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("descripcion")}
            />
            <input
              type="text"
              placeholder="Agente"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("agente")}
            />
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("nombre")}
            />
            <input
              type="number"
              placeholder="Stock inicial"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("inicial")}
            />
            <input
              type="number"
              placeholder="Entrada"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("entrada")}
            />
            <input
              type="number"
              placeholder="Salida"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("salida")}
            />
            <input
              type="number"
              placeholder="Stock final"
              className="w-full p-2 bg-crema rounded-lg outline-none hover:bg-crema-oscura transition-all"
              {...control.register("final")}
            />
          </div>
          <button
            type="submit"
            className="hover:opacity-90 transition-all bg-verde-oscuro px-4 py-2 rounded-lg text-white"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  ) : null;
}
