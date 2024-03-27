import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {isLoading, page, nbPages, handlePage} = useGlobalContext()
  return <div className='btn-container'>
    <button disabled={isLoading}></button>
  </div>
}
 
export default Buttons
