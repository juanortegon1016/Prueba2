import { validarCampos } from "../middlewares/validar-campos.js";
import { check } from "express-validator";
import { emailExiste } from "../helpers/db.validators.js";

const validateUser = [
  check("name").not().isEmpty().withMessage("Not a valid name"),
  check("email").isEmail().withMessage("Not a valid e-mail address"),
  check("user").not().isEmpty().withMessage("Not a valid user"),
  check("pass").isLength({ min: 6 }).withMessage("Not a valid password"),
  validarCampos,
];

export { validateUser };
