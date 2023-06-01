import { response } from "express";
import jwt from "jsontoken";

const validarJWT = (req, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No se encuentra Token",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
      req.uid = uid;
      req.name = name;

  } catch (error) {

    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
};

export { validarJWT };
