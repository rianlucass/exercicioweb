import Sequelize from "sequelize";

const NAME_DB = 'gestao'
const USER  = 'root'
const PASSWORD = 'root'
const HOST = 'localhost'

const sequelize = new Sequelize(
    NAME_DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(()=>{
    console.log('Conexão realizada com Sucesso!')
}).catch((erro)=>{
    console.log('Erro: ', erro)
})

export default {Sequelize, sequelize}