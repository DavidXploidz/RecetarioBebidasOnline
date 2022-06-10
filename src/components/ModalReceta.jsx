import React from 'react'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'
const ModalReceta = () => {

    const {mostrarModal, infoReceta, setMostrarModal, mostrarSpinner} = useBebidas()
    // console.log(infoReceta);

    const cerrarModal = () => {
        setMostrarModal(false)
    }

    const mostrarIngredientes = () => {
        let ingredientes = []
        for(let i = 1 ; i < 16; i++){
            if(infoReceta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>
                        {infoReceta[`strIngredient${i}`]} {infoReceta[`strMeasure${i}`]} 
                    </li>
                )
            }
        }
        return ingredientes
    }

    
   
  return (
     
    <div className='modal'>
        <button onClick={cerrarModal} className='btn-cerra-modal'>X</button>
        {!mostrarSpinner ? (
        
        
            <>  
           
                <img className='imagen-modal' src={infoReceta.strDrinkThumb} alt={`Imgen de ${infoReceta.strDrink}`} />
                <h3>{infoReceta.strDrink}</h3>
                <div>
                    <p className='instrucciones'>Instructions: <span>{infoReceta.strInstructions}</span></p>
                    {/* <p className='ingredientes'>Ingredients:  <span>{infoReceta.strIngredient1}</span>
                    <span>{infoReceta.strIngredient2}</span>
                    <span>{infoReceta.strIngredient3}</span></p> */}
                    <p className='ingredientes'>Ingredients:</p>
                    <span id='spanIngred'>{mostrarIngredientes()}</span>
                    
                
                </div>
           
                
            </>
        ) : <Spinner />}
    
    </div>
    
  )
}

export default ModalReceta