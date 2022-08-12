import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData = [], search }) {

  //function that takes in data and filters the pokeData array for the search value
  function searchPokeData(pokeData) {
    return pokeData.filter((obj) => {
      const lowerCaseSearch = search.toLowerCase()
      const objname = obj.name.toLowerCase()
      return objname.includes(lowerCaseSearch)
    }
    )
  }

  //only modifies the data if there is a search value
  const postSearchPokeData = search.length > 0 ? searchPokeData(pokeData) : pokeData

  //map through array of object and create cards
  const pokemonCards = postSearchPokeData.map((pokemon) => {
    return (
      <PokemonCard pokemon={pokemon} key={pokemon.id} />
    )
  })


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
