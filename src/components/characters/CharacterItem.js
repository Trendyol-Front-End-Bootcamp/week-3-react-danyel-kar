import React from 'react'
import { Link } from 'react-router-dom'
const CharacterItem = ({ characteritem }) => {
    return (
        <Link key={characteritem.id} to={`/character/${characteritem.id}`}>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={characteritem.image} alt='' />
                    </div>
                    <div className='card-back'>
                        <h1>{characteritem.name}</h1>
                        <ul>
                            <li>
                                <strong>Species:</strong> {characteritem.species}
                            </li>
                            <li>
                                <strong>Gender:</strong> {characteritem.gender}
                            </li>
                            <li>
                                <strong>Origin Name:</strong> {characteritem.origin.name}
                            </li>
                            <li>
                                <strong>Status:</strong> {characteritem.status}
                            </li>
                            <li>
                                <strong>Location:</strong> {characteritem.location.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>

    )
} 

export default CharacterItem
