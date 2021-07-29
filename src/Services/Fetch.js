import axios from "axios";

export const fetchItems = async () => {
    //setIsLoading(true)
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/`
    )
    return result.data.results
  }

  export const searchItems = async (query="") => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    )
    return result.data.results
  }

  export const getFilterItems = async (status,gender) => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?&status=${status}&gender=${gender}`
    )
    return result.data.results
  }
