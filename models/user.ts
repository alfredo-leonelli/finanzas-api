import { model, Schema } from "mongoose";
import { USUARIO } from "../types";

const usuarioSchema: Schema = new Schema<USUARIO>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Usuario = model<USUARIO>("Usuario", usuarioSchema);

export default Usuario;
