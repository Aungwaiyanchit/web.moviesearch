import React, { useEffect, useState } from 'react'
import { useSearchParams, Outlet, NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { MainPageLayout } from '../components/MainPageLayout'
import './styles/Search.css'


export const Search = () => {

    const peopleresults = useSelector(state => state.search.results?.peopleResult)
    const tvresults = useSelector(state => state.search.results?.tvResult)
    const movieresults = useSelector(state => state.search.results?.movieResult)
    const [ searchParams ] = useSearchParams()
    const [ data, setData ] = useState({
      people: '', tv: '', movie: '', active: ""
    })
    const loading = useSelector(state => state.search.loading)
    const query = searchParams.get('q')
    const max = Math.max(peopleresults?.total_results, tvresults?.total_results, movieresults?.total_results)

    useEffect(() => {
      if(max === movieresults?.total_results)  setData({...data, active: 'movie'})
      else if(max === peopleresults?.total_results)  setData({...data, active: 'people'})
      else setData({...data, active: 'tv'})
  },[loading])
       

  if(loading) return (<div style={{ color: 'black'}}>Loading</div>) 

  return (
    <MainPageLayout>
        <div  className="SearchPage">
      <div className='filter-container'>
            <div className="filter-title">Filter Results</div>
            <div className={data.active === 'people' ? 'navbar-link selected' : 'navbar-link '}>
              <NavLink to={`person?q=${query}`} onClick={() =>  setData({...data, active: 'people'})}>People</NavLink>
              <span>{peopleresults?.total_results}</span>
            </div>
              <div className={data.active === 'tv' ? 'navbar-link selected' : 'navbar-link '}>
                <NavLink to={`tv?q=${query}`} onClick={() => setData({...data, active: 'tv'})}>Tv Shows</NavLink>
                <span>{tvresults?.total_results}</span>
              </div>
              <div className={data.active === 'movie' ? 'navbar-link selected' : 'navbar-link '}>
                <NavLink to={`movie?q=${query}`} onClick={() =>  setData({...data, active: 'movie'})}>Movie</NavLink>
                <span>{movieresults?.total_results}</span>
               </div>
              </div>

            <Outlet context={{movieresults, peopleresults, tvresults, setData, data}}/>
      </div>
    </MainPageLayout>
    
  )
}
