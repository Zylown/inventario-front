import { z } from "zod";

export const FormAddSchema = z.object({
  categoria: z
    .string({ message: "La categoría tiene que ser texto" })
    .nonempty({ message: "La categoría no puede estar vacía" }),
  producto: z
    .string({ message: "El nombre del producto tiene que ser texto" })
    .nonempty({ message: "El nombre del producto no puede estar vacío" }),
  marca: z
    .string()
    .nonempty({ message: "La marca del producto no puede estar vacía" }),
  estado: z.string(),
  stock: z.coerce.number({ invalid_type_error: "El monto debe ser un número" }),
  precioC: z.coerce
    .number({ invalid_type_error: "El monto debe ser un número" })
    .positive({ message: "El monto debe ser mayor que 0" }),
  precioV: z.coerce
    .number({ invalid_type_error: "El monto debe ser un número" })
    .positive({ message: "El monto debe ser mayor que 0" }),
});

/*
producto: z.string({ message: "El nombre del producto tiene que ser texto" })
    .refine(value => !/^\d+$/.test(value), {
      message: "El nombre del producto no puede ser solo números",
    }),
*/
