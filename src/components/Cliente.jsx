export default function Cliente({ cliente, setCliente, eliminarCliente }) {
    const { nombre, email, seguimiento, id } = cliente
    const handleEliminar = () => {
        const resp = confirm("¿Eliminar cliente?")
        if (resp) { eliminarCliente(id) }
    }
    return (
        <div className="space-y-2 px-5 py-2  bg-white shadow-md rounded-lg ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
                <span className="mx-2 font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                <span className="mx-2 font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Nº de seguimiento:
                <span className="mx-2 font-normal normal-case">{seguimiento}</span>
            </p>
            <div className="flex justify-between w-full mt-10">
                <button
                    type="button"
                    className="py-1 px-5   bg-indigo-600 hover:bg-indigo-700 text-white 
                    font-bold uppercase rounded-lg"
                    onClick={() => setCliente(cliente)}
                >Editar
                </button>
                <button
                    type="button"
                    className="py-1 px-5 bg-red-600 hover:bg-red-700 text-white 
                    font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}