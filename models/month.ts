import { model, Schema } from "mongoose";
import { MES, MESES } from "../types";
import entradaSchema from "./entry";

const mesSchema: Schema = new Schema<MES>(
  {
    mes: {
      type: String,
      required: true,
      enum: {
        values: Object.values(MESES),
        message: "{VALUE} no es un mes válido",
      },
    },
    ano: {
      type: Number,
      required: true,
    },
    registros: [entradaSchema],
  },
  { versionKey: false }
);

const Mes = model<MES>("Mes", mesSchema);

export default Mes;
