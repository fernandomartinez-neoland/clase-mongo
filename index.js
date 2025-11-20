import {traerColeccion, traerRol, consultaUno, actualizarUno} from './config/db.js';
import express from 'express';
import {rutas} from './services/crear.js'

const PORT=3000;
const api=express();
api.use(express.json());

api.use('/traercoleccion', rutas)


api.post('/traercoleccion' ,async (req, res)=>{
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

api.post('/traeruno', async (req, res)=>{

    const {lenguaje_principal}= req.body;
    const {status, response}=await consultaUno(lenguaje_principal)

    res.status(status).send(response)
})

api.post("/actualizauno", async (req, res)=>{
    const {salario_anual, id}=req.body
    const {status, response}=await actualizarUno(salario_anual, id)
    res.status(status).send(response)
})

api.listen(PORT, ()=>{
    console.log(`esta conectado a la url: http://localhost:${PORT}`)
})
