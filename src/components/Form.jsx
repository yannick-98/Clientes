import { useState, useEffect } from "react"
import Msg from "./Msg"

export default function Form({ listaClientes, setListaClientes, cliente, setCliente }) {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [seguimiento, setSeguimiento] = useState('')
    const [formSend, setFormSend] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(cliente).length > 0) {
            setNombre(cliente.nombre)
            setEmail(cliente.email)
            setSeguimiento(cliente.seguimiento)
        }
    }, [cliente])


    const generarId = () => {
        const random = Math.random().toString(36).slice(2)
        const fecha = Date.now().toString(36)
        return (
            random + fecha
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!nombre || !email || !seguimiento) {
            setError(true)
            setTimeout(() => setError(false), 2000)
            return;
        }
        const objCliente = {
            nombre,
            email,
            seguimiento,
        }
        if (cliente.id) {
            objCliente.id = cliente.id
            const listaClientesA = listaClientes.map(clienteState => clienteState.id === cliente.id ?
                objCliente : clienteState)
            setListaClientes(listaClientesA)
            setCliente({})
        } else {
            objCliente.id = generarId()
            setListaClientes([...listaClientes, objCliente])
        }
        setFormSend(true)
        setTimeout(() => setFormSend(false), 2000)
        setNombre('')
        setEmail('')
        setSeguimiento('')


    }

    return (
        <div className="md:w-1/2 lg:w-2/5 md:h-3/5 mx-5 " >
            <h2 className="font-black text-2xl text-center mb-8" > Añadir cliente</h2>
            < form
                onSubmit={handleSubmit}
                className="md:h-2/5 bg-white shadow-md rounded-lg py-5 px-5" >
                <div className="mb-5">
                    <label htmlFor="nombre" className="block">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="seguimiento" className="block">Nº seguimiento</label>
                    <input
                        id="seguimiento"
                        type="text"
                        placeholder="Nº de seguimiento"
                        value={seguimiento}
                        onChange={(e) => setSeguimiento(e.target.value)}
                        className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-purple-500 w-full  p-3 rounded-lg text-white uppercase font-bold hover:bg-purple-800 cursor-pointer"
                    value={cliente.id ? "Editar cliente" : "Agregar cliente"}

                />
                {formSend && <Msg msg={"Cliente" + (cliente.id ? " editado " : " añadido ") + "correctamente"} color={"green"} />}
                {error && <Msg msg={"Todos los campos son obligatorios"} color={"red"} />}
            </form >
        </div >
    )
}