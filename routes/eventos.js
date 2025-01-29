import express from 'express'
import eventoController from '../controller/eventoController.js'

const router = express.Router()

router.get('/', eventoController.index)
router.post('/', eventoController.salvar)

export default router