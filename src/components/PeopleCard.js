import React from 'react'
import './styles/PeopleCard.css'
import { Link, useNavigate } from 'react-router-dom'

export const PeopleCard = ({result}) => {
  const img_url = 'https://image.tmdb.org/t/p/w500'
  const navigate = useNavigate()
  return (
    <div className='card' >
      <img src={result.profile_path ? img_url + result.profile_path  : result.backdrop_path}
      onClick={() =>navigate(`/person/${result.id}`, {replace: true}) }
      />
      <div className='info'>
        <span className='name' onClick={() =>navigate(`/person/${result.id}`, {replace: true}) }>{result.name}</span>
        <span className='option'>{result.known_for_department}</span>
        <div  className='known_for'>
        {
          result.known_for.map((res, index) => (
              <a  href='#' key={index}>{res.title ?  res.title + ', ' : null}</a>
              ))
            }
        </div>
      </div>
    </div>
  )
}
