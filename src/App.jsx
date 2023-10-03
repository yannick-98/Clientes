import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Clientes from './components/Clientes'

function App() {
  const [listaClientes, setListaClientes] = useState(JSON.parse(localStorage.getItem('listaClientes')) ?? [])
  const [cliente, setCliente] = useState({})


  useEffect(() => {
    console.log("ingresando cliente")
    localStorage.setItem('listaClientes', JSON.stringify(listaClientes))
  }, [listaClientes])

  const eliminarCliente = id => {
    const listaClientesA = listaClientes.filter(cliente => cliente.id !== id)
    setListaClientes(listaClientesA)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className=' mt-12 md:flex'>
        <Form
          listaClientes={listaClientes}
          setListaClientes={setListaClientes}
          cliente={cliente}
          setCliente={setCliente}
        />
        <Clientes
          listaClientes={listaClientes}
          setCliente={setCliente}
          eliminarCliente={eliminarCliente}
        />
      </div>
    </div>
  )
}

export default App
