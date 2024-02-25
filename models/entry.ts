import { ENTRADA, CATEGORIAS } from "../types";
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
  },
  { versionKey: false }
);

export default entradaSchema;
