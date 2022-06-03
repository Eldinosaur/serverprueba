const Inicio = require('../models/inicioModel')

exports.addInicio = async(request, response)=>{
    try{
        let inicio
        inicio = new Inicio(request.body)
        await inicio.save()
        response.send(inicio)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadInicio = async(request, response)=>{
    try{
        const inicio = await Inicio.find()
        response.json(inicio)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

