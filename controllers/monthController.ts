import Mes from "../models/month";
import Usuario from "../models/user";
import { Request, Response } from "express";

const createMonth = async (req: Request, res: Response) => {
  try {
    const { usuario, mes, ano } = req.body;
    const usuarioExiste = await Usuario.findOne({ username: usuario });
    if (!usuarioExiste) {
      return res.status(404).json({ message: "Ha ocurrido un error" });
    }
    const nuevoMes = new Mes({ usuario, mes, ano });
    const mesGuardado = await nuevoMes.save();
    res.status(201).json(mesGuardado);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: "Ha ocurrido un error desconocido" });
    }
  }
};

const createEntry = async (req: Request, res: Response) => {
  try {
    const { usuario, mes, registros } = req.body;
    const mesExiste = await Mes.findOne({
      usuario: usuario,
      mes: mes,
    });
    if (!mesExiste) {
      return res.status(404).json({ message: "Mes no encontrado" });
    }
    mesExiste.registros.push(...registros);
    await mesExiste.save();
    res.status(201).json(mesExiste);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: "Ha ocurrido un error desconocido" });
    }
  }
};

export { createMonth, createEntry };
