import banco from '../config/banco.js'

const Evento = banco.sequelize.define('eventos',{
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: banco.Sequelize.STRING(100)
    },
    data:{
        type: banco.Sequelize.STRING
    }
})

Evento.sync()
export default Evento