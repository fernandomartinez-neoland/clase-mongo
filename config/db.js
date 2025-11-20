import db from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.DB)

db.connect(process.env.DB)
    .then(() => console.log('conectado'))
    .catch(() => { console.log("no conectado") })

export async function traerColeccion() {
    try {
        const EjemploSchema =  new db.Schema({});
        const EjemploModel =  db.model("Ejemplo", EjemploSchema, "Ejemplo");
        EjemploModel.init();
        const dataCollection = await EjemploModel.find()

        return {
            status: 200,
            response: {
                message: "conectado a la funcion",
                consulta: dataCollection
            }
        }
    } catch (e) {
        return {
            status: 403,
            response: {
                message: "error en la consulta"
            }
        }
    }
}