import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPageLayout } from '../components/MainPageLayout'
import { getMoviesByOptions } from '../features/movies/movieSlice'
import './styles/Movies.css'

export const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.movies.results)
  const img_url = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    dispatch(getMoviesByOptions(`movie/popular`))
  },[dispatch])

  return (
    <MainPageLayout>
     <div className='MoviePage'>
     {
        movies?.map((movie) => (
          <div className='mshow-card' key={movie.id}>
            <img src={movie.poster_path ? img_url + movie.poster_path : img_url}/>
            <div className='header'>
              <span className='title'>{movie.title}</span>
              <span className='date'>{movie.release_date}</span>
            </div>
          </div>
      ))
      }
     </div>
    </MainPageLayout>
  )
}
