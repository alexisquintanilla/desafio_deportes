import express from 'express'
import router from './routers/deportesRouter.js'

const __dirname = import.meta.dirname

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en puerto: ' + PORT)
})