import React, { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'
import { getResutls } from '../services/api'
import { useSearchParams } from 'react-router-dom'

export const SearchMovie = () => {

  const [ results, setResutls ] = useState(null)
  const [ searchParams, setSearchParams ] = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    getResutls(`search/movie`,`&query=${query}`).then(res => setResutls(res))
  },[query])

  const RednderResult = ({results}) => {
    return (
      <div>
      {  
        results !== null ? (
          results.results.map(result => (
              <MovieCard key={result.id} result={result}/>
          ))
      ): <div>No resluts</div>
    }
      </div>
    )
  }

  return (
    <>
       {
          results === null || results < 0 ? (<div>No result</div>) : (<RednderResult results={results} />)
        }
    </>
  )
}
