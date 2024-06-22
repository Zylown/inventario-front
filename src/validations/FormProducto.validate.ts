import { z } from "zod";

export const FormProductoSchema = z.object({
  idProducto: z.coerce
    .number({ invalid_type_error: "El monto debe ser un número" })
    .positive({ message: "El monto debe ser mayor que 0" }),
  nombreProducto: z.string().nonempty(),
  precioProducto: z.string().nonempty(),
  cantidadProducto: z.coerce
    .number({ invalid_type_error: "El monto debe ser un número" })
    .positive({ message: "El monto debe ser mayor que 0" }),
});
