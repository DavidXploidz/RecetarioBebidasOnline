import { createContext, useState, useEffect } from "react";
import axios from "axios";

	const BebidasContext = createContext()

	const BebidasProvider = ({children}) => {

        const [nombre, setNombre] = useState('')
        const [categoriaSeleccionada, setCategoriaSelecionada] = useState('')

        const [categoria, setCategoria] = useState([])
        const [bebidas, setBebidas] = useState([])

        const [receta, setReceta] = useState('')
        const [infoReceta, setInfoReceta] = useState([])
        const [mostrarModal, setMostrarModal] = useState(false)
        const [mostrarSpinner, setMostrarSpinner] = useState(false)

        const consultarBebida = async () => {
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoriaSeleccionada}`
                const resultado = await axios(url)
                setBebidas(resultado.data.drinks)
            } catch (error) {
                console.log(error);
            }
        }

        const obtenerCategorias = async () => {
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
                const {data} = await axios(url)
                setCategoria(data.drinks)
            } catch (error) {
                console.log(error);
            }
        }
        useEffect(()=> {
            obtenerCategorias()
        },[])

       

        

    	return(
       	 <BebidasContext.Provider 
            	value={{
                    nombre,
                    setNombre,
                    categoria,
                    setCategoria,
                    consultarBebida,
                    bebidas,
                    categoriaSeleccionada,
                    setCategoriaSelecionada,
                    receta,
                    setReceta,
                    mostrarModal,
                    setMostrarModal,
                    infoReceta,
                    setInfoReceta,
                    mostrarSpinner,
                    setMostrarSpinner
                  

           	 }} 
       	 >
           	 {children}
        	</BebidasContext.Provider>
   	 )
	}

	export {
    	BebidasProvider
	}

	export default BebidasContext