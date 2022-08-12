import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {hp, name, sprites} = pokemon
  const [isFront, setIsFront] = useState(true)

  function toggleFrontBack (e){
    const reverseBoolean = !isFront
    setIsFront(reverseBoolean)
  }
  
  return (
    <Card>
      <div>
        <div className="image" onClick={toggleFrontBack}>
          {/* update sprite image depending on toggle click */}
          <img src={isFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
