import React from 'react'
import Formulario from './Formulario'
import ListadoBebidas from './ListadoBebidas'
import ModalReceta from './ModalReceta'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'


const AppBebidas = () => {

  const {mostrarModal, mostrarSpinner} = useBebidas()


  return (
    <>
        <h1 className='titulo'>Recetario Online de Bebidas</h1>
        <Formulario />
        <ListadoBebidas />
        {mostrarModal && (
           <ModalReceta />
        )}
      
      
    
    </>
  )
}

export default AppBebidas