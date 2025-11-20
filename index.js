import {traerColeccion, traerRol} from './config/db.js';
import express from 'express';
const PORT=3000;
const api=express();
api.use(express.json());

api.post('/traercoleccion',async (req, res)=>{
 const {status, response}= await traerColeccion()
    res.status(status).send({
        response
    })
});

api.post('/traerrol', async(req, res)=>{
    const {rol}=req.body;
    const {status, response}=await traerRol(rol)
    
    res.status(status).send(response)
})

api.listen(PORT, ()=>{
    console.log(`esta conectado a la url: http://localhost:${PORT}`)
})
