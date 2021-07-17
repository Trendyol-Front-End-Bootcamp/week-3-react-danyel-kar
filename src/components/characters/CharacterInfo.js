import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function CharacterInfo({ }) {

    const [character, setCharacter] = useState({
        name: '',
        type: '',
        origin: '',
        gender: '',
        species: '',
        created: '',
        location: '',
        image: '',
        episode: [],
    });

    const { id } = useParams();

    const [episodeInfos, setEpisodeInfos] = useState([])


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/' + id).then((res) => {
            console.log(res.data)
            setCharacter(res.data);
        });
        return () => { };
    }, [id]);

    useEffect(() => {
        //If there are episodes of the character, get the data of episodes
        if (!!character.episode.length) {
            axios
                .all([...character.episode.map((episode) => axios.get(episode))])
                .then((res) => setEpisodeInfos(res.map((episode) => episode.data)));
        }
    }, [character]);

    return (
        <div className='container-info'>
            <div className='card-info'>
                <div className='card-left'>
                    <img src={character.image} alt='character' />
                </div>
                <div className='card-right'>
                    <h1>{character.name}</h1>
                    <hr /><br></br>
                    <ul>
                        <li>
                            <strong>Species:</strong> {character.species}
                        </li>
                        <li>
                            <strong>Gender:</strong> {character.gender}
                        </li>
                        <li>
                            <strong>Origin Name:</strong> {character.origin.name}
                        </li>
                        <li>
                            <strong>Status:</strong> {character.status}
                        </li>
                        <li>
                            <strong>Location:</strong> {character.location.name}
                        </li>
                        <p><strong>Episodes:</strong></p>
                        {episodeInfos.slice(0, 5).map((episode) => {
                            return (<li key={episode.id}>
                                {episode.name}
                            </li>)
                        })}

                    </ul>
                    <Link to="/">                       
                        <button className='back-btn'>Click For Home Page</button>         
                    </Link>
                </div>
            </div>
        </div>

    )
}


