import React, { useContext, useEffect, useMemo, useState } from 'react'
import { getImage } from '../services/api';
import { MovieCard } from './MovieCard';
import { PeopleCard } from './PeopleCard';
import { Link, NavLink,  useNavigate,  useOutletContext,  useSearchParams } from 'react-router-dom'
import { getResutls } from '../services/api'
import './styles/Results.css'
import ReactPaginate from 'react-paginate';




export const Results = () => {
    const { movieresults, peopleresults, tvresults, data, setData } = useOutletContext()
    
    const max = Math.max(movieresults?.total_results, peopleresults?.total_results, tvresults?.total_results)
    
    const RednderResult = () => {
        if(movieresults?.results.length === 0 && 
            peopleresults?.results.length === 0 && 
            tvresults?.results.length === 0){
            return (<div style={{ color: 'black', minWidth: '400px'}}>There is no movie with your query</div>)
        }else{
            if(max === movieresults?.total_results){
                return (
                    movieresults?.results.map(result => (
                        <MovieCard result={result} key={result.id}/>
    
                    ))
                )
           }else if(max === peopleresults?.total_results){
            return (
                peopleresults?.results.map(result => (
                    <PeopleCard result={result} key={result.id}/>
                ))
            )
           }else{
            return (
                tvresults?.results.map(result => (
                    <MovieCard result={result} key={result.id}/>
                ))
            )
           }
        }
    }

    
  return (
       <div className='results-container'>
               {RednderResult()}
        </div>
  )
}

