import { z } from "zod";

export const FormAddSchemaKardex = z.object({
  fecha: z
    .string({ message: "La fecha tiene que ser texto" })
    .nonempty({ message: "La fecha no puede estar vacía" }),
  hora: z
    .string({ message: "La hora tiene que ser texto" })
    .nonempty({ message: "La hora no puede estar vacía" }),
  producto: z
    .string({ message: "El nombre del producto tiene que ser texto" })
    .nonempty({ message: "El nombre del producto no puede estar vacío" }),
  descripcion: z
    .string({ message: "La descripción tiene que ser texto" })
    .nonempty({ message: "La descripción no puede estar vacía" }),
  agente: z
    .string({ message: "El agente tiene que ser texto" })
    .nonempty({ message: "El agente no puede estar vacío" }),
  nombre: z
    .string({ message: "El nombre tiene que ser texto" })
    .nonempty({ message: "El nombre no puede estar vacío" }),
  inicial: z.coerce
    .number({ message: "El stock inicial tiene que ser número" })
    .min(0, { message: "El stock inicial no puede ser negativo" }),
  entrada: z.coerce.number({ message: "La entrada tiene que ser número" }),
  salida: z.coerce.number({ message: "La salida tiene que ser número" }),
  final: z.coerce
    .number({ message: "El stock final tiene que ser número" })
    .optional(),
});
