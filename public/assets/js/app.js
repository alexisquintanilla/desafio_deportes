
const deporteDOM = document.querySelector('#cuerpo')
const formAddDeporte = document.querySelector('#formAddDeporte')
const editPush = document.getElementById('editButton')

const getUsers = async () => {
    const { data } = await axios.get('/api/v1/deportes')

    deporteDOM.innerHTML = ''
    data.forEach((deporte, i) => {

        deporteDOM.innerHTML += `
        <tr>
        <th scope="row">${i + 1}</th>
          <td>${deporte.nombre}</td>
          <td>${deporte.precio}</td>
          <td>
            <button class="btn btn-warning" onclick='updateUser("${deporte.uid}","${deporte.precio}")' data-toggle="modal" data-target="#exampleModal">Editar</button>
            <button class="btn btn-danger" onclick="removeUser('${deporte.uid}')">Eliminar</button>
          </td>
        </tr>
        `
    })
}


editPush.addEventListener('click', async () => {
    const nombre = document.getElementById('nombreModal').value
    const precio = document.getElementById('precioModal').value
    const uid = document.getElementById('udModal').value
    console.log(precio)
    console.log(nombre)
    console.log(uid)
    await axios.put('/api/v1/deportes/' + uid, {
        nombre, precio
    })
    const modal = document.getElementById('exampleModal');
    modal.style.display = 'none';
    location.reload();
    getUsers()
})

const updateUser = async uid => {
    const { data } = await axios.get('/api/v1/deportes/' + uid)
    console.log(data)
    document.getElementById('nombreModal').value = data.nombre
    document.getElementById('precioModal').value = data.precio
    document.getElementById('udModal').value = data.uid

}

const removeUser = async (uid) => {
    await axios.delete('/api/v1/deportes/' + uid)
    getUsers()
}

formAddDeporte.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!e.target.nombre.value || !e.target.precio.value) {
        return res.status(400).json({ ok: false, msg: "Todos los campos son obligatorios" })
    }
    await axios.post('/api/v1/deportes', {
        nombre: e.target.nombre.value,
        precio: e.target.precio.value
    })

    getUsers()
})

getUsers()