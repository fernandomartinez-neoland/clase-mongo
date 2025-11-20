import express from "express"
import db from "mongoose"

export const rutas=express.Router()

rutas.post("/crear", (req, res)=>{
    res.status(200).send("holi")

})


