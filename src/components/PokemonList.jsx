import axios from 'axios';
import React, {useEffect, useState} from 'react'

const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState([]);


    const handleFetch = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => {
            return response.json();
        })
        .then(response => {
            setPokemon(response.results);
            // objects of pokemon
            console.log(response)
            // console.log(response.results)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleAxios = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => {
            // console.log(response)
            // console.log(response.data.results)
            setPokemon(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <button onClick={handleAxios}>Axios Pokemon</button>
            {
                pokemon.map((poke,idx) =>
                    <p key={idx}>{idx} {poke.name}</p>
                    // look at each pokemon after we fetch
                )
            }
            
            <button onClick={handleFetch}>Fetch Pokemon</button>
            {
                pokemon.map((poke,idx) =>
                    <p key={idx}>{idx} {poke.name}</p>
                    // look at each pokemon after we fetch
                )
            }

        </div>

    );
}

export default PokemonList