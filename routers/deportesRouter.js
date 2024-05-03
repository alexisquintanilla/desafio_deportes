import { Router } from "express"
import { deportesController } from "../controllers/deportesController.js"

const router = Router()

router.get('/agregar', deportesController.getAgregar)

router.get('/deportes', deportesController.getDeportes)

router.put('/editar', deportesController.putEditar)

router.get('/eliminar', deportesController.deleteDeportes)


export default router