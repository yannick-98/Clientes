import Cliente from "./Cliente";

export default function Clientes({ listaClientes, setCliente, eliminarCliente }) {


    return (
        <div className="  md:w-1/2 lg:w-3/5 md:h-3/5 mx-5 my-14 md:my-0">
            <h2 className="font-black text-2xl text-center mb-8">Clientes</h2>

            {listaClientes.length ? (
                <div
                    className="flex flex-col justify-between gap-2  rounded-lg shadow-lg md:overflow-y-scroll"
                    style={{ maxHeight: "40vh" }}>
                    {listaClientes.map((cliente) => (
                        <Cliente key={cliente.id} listaClientes={listaClientes} cliente={cliente}
                            setCliente={setCliente} eliminarCliente={eliminarCliente} />
                    ))}
                </div>
            ) : (
                <h3 className=" text-center w-full bg-white rounded-lg">No hay clientes registrados</h3>
            )
            }
        </div>

    )
}
