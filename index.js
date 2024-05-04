import express from 'express'
import { engine } from 'express-handlebars';
import userRoutes from './routes/deporte.route.js'


const app = express()

const __dirname = import.meta.dirname


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/assets/js', express.static(__dirname + '/node_modules/axios/dist/'))
app.use('/assets/js', express.static(__dirname + '/node_modules/bootstrap/dist/js/'))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    return res.render('home')
})

app.use('/api/v1/deportes', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor funciona en el puerto : ${PORT}`)
})