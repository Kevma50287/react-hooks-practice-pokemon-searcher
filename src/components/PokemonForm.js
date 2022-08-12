import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const defaultPokeObj = {
    "name": "",
    "hp": "",
    "sprites": {
      "front": "",
      "back": ""
    }
  }

  const [newPokemon, setNewPokemon] = useState(defaultPokeObj)

  function handleNewPokemon(e) {
    const value = e.target.value
    const key = e.target.name
    let obj = {}
    switch (key) {
      case "frontUrl":
        obj = { ...newPokemon, "sprites": { ...newPokemon.sprites, "front": value } };
        break;
      case "backUrl":
        obj = { ...newPokemon, "sprites": { ...newPokemon.sprites, "back": value } };
        break;
      default:
        obj = { ...newPokemon, [key]: value };
    }
    setNewPokemon(obj)
  }

  console.log(newPokemon)

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }).then(r => r.json())
      .then(data =>
        addPokemon(data)
      )
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          console.log("submitting form...")
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNewPokemon} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleNewPokemon} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleNewPokemon}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleNewPokemon}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
