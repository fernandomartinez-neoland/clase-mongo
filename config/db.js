import db from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

db.connect(process.env.DB)
    .then(() => console.log('conectado'))
    .catch(() => { console.log("no conectado") })

export async function traerColeccion() {
    try {
        const EjemploSchema = new db.Schema({});
        const EjemploModel = db.model("Ejemplo", EjemploSchema, "Ejemplo");
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

// ene sta funcion ubicamos todos los documentos en la bd cuyo rol coincidan con el enviado por peticion hacia la api
export async function traerRol(rol) {
    try {
        const rolSchema = new db.Schema({});
        const rolModel = db.models.Ejemplo || db.model("Ejemplo", rolSchema, "Ejemplo");
        // rolModel.init()
        const rolFind = await rolModel.find({ rol: rol });
        return {
            status: 200,
            response: {
                success: true,
                message: rolFind
            }
        }
    } catch (e) {
        return {
            status: 401,
            response: {
                success: false,
                message: e.message
            }
        }
    }
}

export async function consultaUno(lenguaje) {

    try {
        const lenguajeSchma = new db.Schema({})
        const lenguajeModel = db.models.Ejemplo || db.model("Ejemplo", lenguajeSchma, "Ejemplo")

        const lenguaje_principal = await lenguajeModel.findOne({ lenguaje_principal: lenguaje })
        return {
            status: 200,
            response: {
                success: true,
                message: lenguaje_principal
            }
        }
    } catch (e) {
        return {
            status: 400,
            response: {
                success: false,
                message: e.message
            }
        }
    }
}

export async function actualizarUno(salario, id) {
    try {
        const actualizarSchema = new db.Schema({
            "rol": String,
            "experiencia": String,
            "salario_anual": Number,
            "lenguaje_principal": String,
            "ciudad": String
        })

        const actualizarModel= db.models.Ejemplo||db.model("Ejemplo", actualizarSchema, "Ejemplo" )

        actualizarModel.init();

        const update=await actualizarModel.findOneAndUpdate({_id:id}, 
            {
                "salario_anual":salario
            })
        return {
            status: 200,
            response: {
                success: true,
                message:"Dato Actualizado",
                antes: update
            }
        }
    } catch (e) {
        return {
            status: 400,
            response: {
                success: true,
                message: e.message
            }
        }
    }
}