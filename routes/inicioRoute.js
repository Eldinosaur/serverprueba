//Rutas para el modulo inicio
const express = require('express')
const router = express.Router()
const inicioController = require('../controllers/inicioController')

//api/core
router.post('/', inicioController.addInicio)
router.get('/', inicioController.loadInicio)

module.exports = router