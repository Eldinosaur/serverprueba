const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')

//crear el servidor
const app = express()

//colectar BD
conectarDB()
app.use(express.json())
app.use(cors())

app.use('/api/inicio', require('./routes/inicioRoute'))

const port = process.env.PORT  || 7000

//Ruta inicial del servidor
app.get('/',(request, response)=>{
    response.send("Server API Rest")
})

//Levantar el servidor
app.listen(port, ()=> console.log('Server listening on port', port))