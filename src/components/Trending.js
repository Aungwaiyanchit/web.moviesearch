import React, { useCallback } from 'react'
import './styles/Slider.css'
import { SwitchButton } from './SwitchButton';


export const Trending = ({results, trendingOption, setTrendingOption}) => {
    const img_url = 'https://image.tmdb.org/t/p/w500'

    const onRadioChange = useCallback(ev => {
        setTrendingOption(ev.target.value)
    },[])

  return (
    <>
        
        <div style={{ background: '#ffff', width: '100%', margin: '1rem', maxWidth: '1300px'}}>
           <div className='heading'>
               <span>Trending</span>
               <div
                className='button-container'>
                   <button 
                   className={trendingOption === 'day' ? 'active': ''}
                   onClick={() => setTrendingOption('day')
                    }>Today</button>
                   <button
                   className={trendingOption === 'week' ? 'active': ''}
                    onClick={() => setTrendingOption('week')}
                   >Week</button>
               </div>
                
            </div>
            <div 
             
            
            className='slider-container'>
            {
                results.results.map((result) => (
                    <div
                    animate={{ opacity: 1}}
                    initial={{ opacity: 0}}
                    exit={{ opacity: 1 }}
                    key={result.id} className="slide-card">
                        <img src={img_url + result.poster_path} />
                        <div className='content'>
                            <span className='title'>{result.title ? result.title: result.original_name}</span>
                            <span className='date'>{result.release_date ? result.release_date : result.first_air_date}</span>
                        </div>
                    </div>
                ))
            }
            </div>
           
        </div>
    </>
  )
}
