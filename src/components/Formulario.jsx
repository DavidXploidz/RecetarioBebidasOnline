import {useState} from 'react'
import useBebidas from '../hooks/useBebidas'
const Formulario = () => {

    const { nombre, setNombre, consultarBebida, categoria, categoriaSeleccionada, setCategoriaSelecionada } = useBebidas()

    const [alerta, setAlerta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre === '' || categoriaSeleccionada === ''){
            setAlerta('Ambos Campos son Obligatorios')
            return;
        }
        setAlerta('')
        consultarBebida()
    
    }
    

  return (
    <div className='flex'>
      {alerta ? <p className='error'>**{alerta}**</p> : ''}
        <form className='formulario contenedor'>
        
            <div className='flex'>
                <label>Nombre Bebida </label> 
                <input className='input-styles' type="text" placeholder='Ej: Tequila' onChange={e => setNombre(e.target.value)}   />
            </div>
            <div className='flex'>
                <label>Categoria Bebida </label>
                <select className='input-styles' onBlur={e => setCategoriaSelecionada(e.target.value)}>
                    <option value="">-- Seleccione la categoria --</option>
                    {categoria.map((drinks, index) => (
                        <option  key={index} value={drinks.strCategory}>{drinks.strCategory}</option>
                    ))}
                </select>
            </div>
            <button type='submit' className='btn-submit' onClick={handleSubmit}>Buscar Bebidas</button>
        
        </form>
    </div>
  )
}

export default Formulario