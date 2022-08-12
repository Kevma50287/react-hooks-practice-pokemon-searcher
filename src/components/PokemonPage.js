import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([])
  const [search, setSearch] = useState("")
  // const [newPokeData, setNewPokeData] = useState({
  //   name:"",
  //   hp:"",
  //   sprites:{
  //     front:"",
  //     back:""
  //   }

  // })

  //useEffect to fetch
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(data => setPokeData(data))
  }, [])

  function handleSearch(search) {
    setSearch(search)
  }

  function handleAddPokemon(obj){
    const newPokeData = [...pokeData, obj]
    console.log("Data before:", newPokeData)
    const sortNewPokeData = newPokeData.sort((a, b)=>{
      return a.id - b.id
    })
    console.log("Data after:", sortNewPokeData)
    setPokeData(sortNewPokeData)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={handleAddPokemon} />
      <br />
      <Search setSearch={handleSearch} />
      <br />
      <PokemonCollection pokeData={pokeData} search={search} />
    </Container>
  );
}

export default PokemonPage;
