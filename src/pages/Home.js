import React, { useEffect, useState } from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import './styles/Home.css'
import { Slider } from '../components/Slider'
import { getPopular, getTrending, getUpcomming } from '../services/api'
import { UpComming } from '../components/UpComming'
import { Trending } from '../components/Trending'


export const Home = () => {
    const [ popularResults, setPopularResults ] = useState(null)
    const [ trendingResults, setTrendingResults ] = useState(null)
    const [ trendingOption, setTrendingOption ] =  useState('day')

 
    useEffect(() => {
        getPopular('movie/popular').then(res => setPopularResults(res))
        getTrending(`trending/all/${trendingOption}`).then(res => setTrendingResults(res))
    },[trendingOption])

    useEffect(() => {
       if(localStorage.getItem('lastVale')){
        localStorage.removeItem('lastVale')
       }
    },[localStorage.getItem('lastVale')])

    const renderPopular = (results) => {
        if(popularResults === null) return (<div>Loading</div>)
        if(popularResults !== null ) return (
            <Slider results={popularResults}/>
        )
    }
    const renderTrending = (results) => {
        if(trendingResults === null) return (<div>No Results</div>)
        if(trendingResults !== null ) return (
            <Trending results={trendingResults} 
            trendingOption={trendingOption} 
            setTrendingOption={setTrendingOption}/>
        )
    }
    return (
        <MainPageLayout>
            <div className='container'>
               {renderPopular(popularResults)}
               {renderTrending(trendingResults)}
            </div>
        </MainPageLayout>
    )
}
