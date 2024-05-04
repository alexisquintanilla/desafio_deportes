import { Deporte } from "../models/deportes.model.js"

export const getAllUsers = async (req, res) => {
    try {
        const deportes = await Deporte.findAll()
        return res.json(deportes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const getUser = async (req, res) => {
    const { uid } = req.params
    const deportes = await Deporte.findOneById(uid)
    return res.json(deportes)
}

export const createUser = async (req, res) => {
    const { nombre, precio } = req.body
    const newDeporte = await Deporte.create(nombre, precio)
    return res.json(newDeporte)
}

export const updateUser = async (req, res) => {
    const { uid } = req.params
    const { nombre, precio } = req.body
    const deportes = await Deporte.update(uid, nombre, precio)
    return res.json(deportes)
}

export const removeUser = async (req, res) => {
    const { uid } = req.params
    const filterdeportes = await Deporte.remove(uid)
    return res.json(filterdeportes)
}