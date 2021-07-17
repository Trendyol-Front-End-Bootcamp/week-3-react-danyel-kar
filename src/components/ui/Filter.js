import React, {useState} from 'react'
import {getFilterItems} from '../../Services/Fetch'

const Filter = ({getFilter}) => {
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    

    async function filterButton(e){
        e.preventDefault()
        const data = await getFilterItems(status, gender)
        getFilter(data)
    }
    return (
    <div className='filter-section'>
        <select onChange={(e)=> setGender(e.target.value)} defaultValue={gender} className='gender-section'>
            <option value="" >Gender Filter</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        <select onChange={(e)=> setStatus(e.target.value)} defaultValue={status} className='status-section'>
            <option value="">Status Filter</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button className="src-button" onClick={filterButton}>Get Filter</button>
    </div>  
    )
}

export default Filter
