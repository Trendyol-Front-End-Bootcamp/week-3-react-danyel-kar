import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'


const CharacterGrid = ({ items, isLoading }) => {
  return (
    isLoading ? (
      <Spinner />
    ) : (
      <section className='cards'>
        {items.map((item, id) => (
          <CharacterItem key={id} characteritem={item}></CharacterItem>
        ))}
      </section>
    )
  )

}

export default CharacterGrid
