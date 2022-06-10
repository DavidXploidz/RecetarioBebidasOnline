import React, { useEffect } from 'react'
import useBebidas from '../hooks/useBebidas'
import axios from "axios";

const ListadoBebidas = () => {
  

  const {bebidas, receta, setReceta, setMostrarModal, setInfoReceta, setMostrarSpinner} = useBebidas()

  useEffect(()=>{
    setMostrarSpinner(true)
    const consultarReceta = async () => {
      try {
          
          const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${receta}`
          const resultado = await axios(url)
          
          setInfoReceta(resultado.data.drinks[0])
        
      } catch (error) {
          console.log(error);
      }
      setMostrarSpinner(false)
  }
  consultarReceta()  
  },[receta])

  

  return (
    <div className='grid-container contenedor '>
        {bebidas.map(item =>  
        ( 
            <article key={item.idDrink} className="card">
                <img src={item.strDrinkThumb} alt={`Imagen de ${item.strDrink}`} className="imagenes" />
                <h2>{item.strDrink}</h2> 
                <button onClick={e => {setReceta(e.target.value),setMostrarModal(true)}  } className='btn-receta' value={item.idDrink}>Ver Receta</button>
            </article>
        )
        )}
    </div>
  )
}

export default ListadoBebidas