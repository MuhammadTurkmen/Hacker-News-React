import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext()
  return <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>search hacker news</h2>
    <input type='text' className='form-input' value={query} onChange={handleSearch}/>
  </form>
}

export default SearchForm
