import axios from "axios";

export const fetchItems = async () => {
    //setIsLoading(true)
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/`
    ).then((response) => {
      return response.data.results
    } );
    return result
    
  }

  export const searchItems = async (query) => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    ).then((response) => {
      return response.data.results
    } );
    return result
  }

  export const getFilterItems = async (status,gender) => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/?&status=${status}&gender=${gender}`
    ).then((response) => {
      return response.data.results
    } );
    return result
  }
