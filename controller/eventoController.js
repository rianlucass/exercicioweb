import Evento from '../models/evento.js'

class EventoController{
    index = async function (req, res) {
        const eventos = await Evento.findAll()
        res.render('eventos', {eventos: eventos})
    }

    salvar = function(req, res) {
        const evento = {
        nome: req.body.nome,
        data: req.body.data
        }
        
        Evento.create(evento).then(function(){
            res.redirect('/')
        })
    }
}

export default new EventoController