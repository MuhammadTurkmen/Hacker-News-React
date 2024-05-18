import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading, hits} = useGlobalContext()

  
  if(isLoading) {
    return <div className='loading'></div>
  }
  
  return <section className='stories'>
    {hits.map((story) => {
      const {objectID, title, num_comments, url, points, author} = story
      return <article key={objectID} className='story'>
        
      </article>
    })}
  </section>
}

export default Stories
