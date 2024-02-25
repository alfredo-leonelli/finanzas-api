import { ENTRADA, CATEGORIAS, TIPOS_EGR, TIPOS_ING } from "../types";
import { Schema } from "mongoose";

const entradaSchema: Schema = new Schema<ENTRADA>(
  {
    categoria: {
      type: String,
      required: true,
      enum: {
        values: Object.values(CATEGORIAS),
        message: "{VALUE} no es una categoría válida",
      },
    },
    tipo: {
      type: String,
      required: true,
      enum: {
        values: [...Object.values(TIPOS_ING), ...Object.values(TIPOS_EGR)],
        message: "{VALUE} no es un tipo válido",
      },
    },
    monto: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default entradaSchema;
