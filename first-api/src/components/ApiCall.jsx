import React, { useEffect, useState } from 'react';

const ApiCall = props =>{
    const [pokemon, setPokemon]= useState ({})
    const [isLoaded, setIsLoaded] = useState (false);
    const onClick = props=>{
        isLoaded? setIsLoaded(false): setIsLoaded(true)
    }
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            // console.log(res)
            setPokemon(res.results)
            
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    console.log(pokemon)
    return(
        <div>
        <button className="btn btn-success" onClick={onClick}>Fetch Pokemon</button>
        {isLoaded ? 
        pokemon.map(poke=>{
            return <h3>Name: <span className="text-danger">{poke.name}</span></h3>
        }
            ):""
        }
        </div>
    )
}

export default ApiCall