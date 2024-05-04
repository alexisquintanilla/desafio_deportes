import { Router } from 'express'
import { createUser, getAllUsers, getUser, removeUser, updateUser } from '../controllers/deportes.controller.js'

const router = Router()

router.get('/', getAllUsers)
router.get('/:uid', getUser)
router.post('/', createUser)
router.put('/:uid', updateUser)
router.delete('/:uid', removeUser)

export default router;