import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemons/thunks";


export const PokemonApp = () => {

  const dispatch = useDispatch(); // crea dispatch function que vamos a usar para disparar cualquier accion (disparar o despachar)
  
  const { pokemons, isLoading, page } = useSelector(state => state.pokemons);

  
  useEffect(() => {
    
    dispatch( getPokemons() );
    
  }, [])
  
  // console.log(pokemons);
  // console.log(isLoading);
  // console.log(page);


  return (
   
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? "True" : "False" }</span>


        <ul>
          {
            pokemons.map( pokemon => (
              // console.log(pokemon)
              <li key={ pokemon.name }>{pokemon.name}</li>
            ))
          }
        </ul>

        <button 
          disabled= { isLoading } 
          onClick={ () => dispatch( getPokemons( page ) ) }
        >
          Next
        </button>
    </>

  )
}
