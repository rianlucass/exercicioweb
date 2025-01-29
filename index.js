import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import express from 'express'
const app = express()
import handlebars from 'express-handlebars'
import Handlebars from 'handlebars'
import bodyParser from 'body-parser'

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

import router from './routes/eventos.js'
app.use(router)

app.listen(8080, ()=>{console.log('Servidor rodando em http://localhost:8080')})