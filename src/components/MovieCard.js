import React from 'react'
import { Link } from 'react-router-dom';
import './styles/MovieCard.css'

const No_image = require('./styles/No_Image.png')
console.log(No_image);

export const MovieCard = ({result}) => {
  const img_url = 'https://image.tmdb.org/t/p/w500'
  
  const TextSlice = (data) => {
    const text = data ? data.split('').slice(0,150).join('')+'...' : ''
    return text
}

  return (
    <div className="mcard">
        <img src={result.poster_path ? img_url + result.poster_path  : No_image}/>
        <div className='info'>
                <span className='title'>{result.name ? result.name : result.original_title}</span>
                <span className='date'>{result.release_date ? result.release_date : result.first_air_date}</span>
                <p className='overview'>{TextSlice(result.overview)}</p>
        </div>
    </div>
  )
}
