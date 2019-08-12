import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

export default function PokemonCollection({pokemons}) {

  return (
    <Card.Group itemsPerRow={6}>
      {
        pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon} />)
      }
    </Card.Group>
  )
}

