import { validateUser } from "../validators/checks.js";
import { validarJWT } from "../middlewares/validar-token.js";
import express from "express";
import { validateUser } from "../validators/checks.js";
import { validarJWT } from "../middlewares/validar-token.js";
import {createUser, revalidarToken, loginUsuario } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/", loginUsuario);

router.post("/new", validateUser, createUser);

router.get("/renew", validarJWT, revalidarToken);

export default router;
