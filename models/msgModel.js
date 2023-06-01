import mongoose, {Schema, model} from "mongoose";

export const msgSchema = Schema({
    user: { type: String, required: true },
    mensaje: { type: String, required: true },
  });
  
  const msgModel = model("msg", msgSchema);
  
  export { msgModel };