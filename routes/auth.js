import router from "./users.routes";
import { check } from "express-validator";
import { loginUsuario } from "../controllers/users.controllers.js";
import { request, response } from "express";
import { validarCampos } from "../middlewares/validar-campos.js";

router.post("/", loginUsuario);

router.post(
  "/new",
  [
    check("name", "Campo necesario para continuar").not().isEmpty(),
    check("email", "Campo necesario para continuar").isEmail(),
    check("user", "Campo necesario para continuar").not().isEmpty(),
    check("password", "Campo necesario para continuar").isLength({
      min: 6,
    }),
    validarCampos,
  ],

  loginUsuario
);

router.get("/renew", revalidarToken);

export { router };
