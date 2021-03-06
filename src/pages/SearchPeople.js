import React, { useState, useEffect } from 'react'
import { getResutls } from '../services/api'
import { useSearchParams } from 'react-router-dom'
import { PeopleCard } from '../components/PeopleCard'


export const SearchPeople = () => {
    const [ results, setResutls ] = useState(null)

    
    const [ searchParams ] = useSearchParams()
    const query = searchParams.get('q')
    useEffect(() => {
        getResutls(`search/person`,`&query=${query}`).then(res => setResutls(res))
      },[query])

      const RednderResult = ({results}) => {
        return (
          <div>
          {  
            results !== null ? (
              results.results.map(result => (
                  <PeopleCard key={result.id} result={result}/>
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
