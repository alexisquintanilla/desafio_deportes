import { readFile, writeFile } from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import path from 'path'

const _dirname = import.meta.dirname

const filePath = path.join(_dirname, "../data/dataDeportes.json")

const findAll = async () => {
    const data = await readFile(filePath, 'utf8')
    const deportes = JSON.parse(data)
    return deportes
}

const findOneById = async (uid) => {
    const data = await readFile(filePath, 'utf8')
    const users = JSON.parse(data)
    const user = users.find(item => item.uid === uid)
    return user
}

const create = async (nombre, precio) => {
    const data = await readFile(filePath, 'utf8')
    const deportes = JSON.parse(data)
    console.log(nombre)
    const newDeporte = {
        nombre,
        precio,
        uid: uuidv4().slice(0, 3)
    }
    deportes.push(newDeporte)
    await writeFile(filePath, JSON.stringify(deportes))
    return newDeporte
}

const update = async (uid, nombre, precio) => {
    const data = await readFile(filePath, 'utf8')
    const deportes = JSON.parse(data)
    const deporte = deportes.find(item => item.uid === uid)
    deporte.nombre = nombre
    deporte.precio = precio
    await writeFile(filePath, JSON.stringify(deportes))
    return deporte
}

const remove = async (uid) => {
    const data = await readFile(filePath, 'utf8')
    const deportes = JSON.parse(data)
    const filteredDeportes = deportes.filter(item => item.uid !== uid)
    await writeFile(filePath, JSON.stringify(filteredDeportes))
    return filteredDeportes
}

export const Deporte = {
    findAll,
    findOneById,
    create,
    update,
    remove
}