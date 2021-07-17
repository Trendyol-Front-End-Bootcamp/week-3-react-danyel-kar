import React, { useState, useEffect } from 'react'
import { fetchItems, searchItems } from '../Services/Fetch'
import Header from '../components/ui/Header'
import SearchBar from '../components/ui/SearchBar'
import Filter from '../components/ui/Filter'
import CharacterGrid from '../components/characters/CharacterGrid'

import '../App.css'

export default function  Home  ()  {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState()
    const [query, setQuery] = useState('')

    async function getCharacter() {
        try {
            const data = await fetchItems();
            setItems(data);
        } catch {
            setIsLoading(false);
        }
    }

    async function getSearch(searcItem) {
        try {
            const data = await searchItems(searcItem);
            setItems(data);
        } catch {
            setIsLoading(false);
        }
    }

    async function getFilter(data) {

        setItems(data);
    }

    useEffect(() => {
        if (query === '') {
            getCharacter()
        } else {
            getSearch(query)
        }
        setIsLoading(false)
    }, [query])


    return (
        <>
            <Header />
            <SearchBar getQuery={(q) => setQuery(q)} />
            <Filter getFilter={getFilter} />
            <CharacterGrid isLoading={isLoading} items={items} 
            />
        </>
    )
}

