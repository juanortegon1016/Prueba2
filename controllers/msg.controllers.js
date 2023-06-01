import { msgModel } from "../models/msgModel.js";
import { response, request } from "express";

const getMsg = (request, response) => {
    response.send("...")
}

const createMsg = async (req = request, res = response) => {
    const { user, mensaje } = req.body
    try {

        const newMsg = new msgModel({ user, mensaje })
        await newMsg.save()
        return res.json({ msg: newMsg})

    } catch (error) {
        
        console.log(error)
        res.status(502).json({ msg: "..." })
    }
}

export { getMsg, createMsg }