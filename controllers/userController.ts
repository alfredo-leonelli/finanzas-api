import Usuario from "../models/user";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const nuevoUsuario = new Usuario({ username, password: hashedPassword });
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Ha ocurrido un error desconocido" });
    }
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ username });
    if (!usuario) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const contrasenaCorrecta = await bcrypt.compare(password, usuario.password);
    if (!contrasenaCorrecta) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    const token = jwt.sign({ username }, JWT_SECRET || "", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Ha ocurrido un error desconocido" });
  }
};

export { createUser, login };
