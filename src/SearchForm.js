import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext()
  return <form>
    <h2></h2>
  </form>
}

export default SearchForm
