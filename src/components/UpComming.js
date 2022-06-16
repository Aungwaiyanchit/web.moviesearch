import React from 'react'
import './styles/Upcoming.css'

export const UpComming = ({results}) => {
    const img_url = 'https://image.tmdb.org/t/p/w500'
    console.log(results);
    const currentDate = new Date()
  return (
    <>
        
        <div style={{ background: '#ffff', width: '100%', maxWidth: '1300px'}}>
            <h2>What's popular</h2>
            <div className='slider-container'>
            {
                results.results.map((result) => (
                    new Date(result.release_date).getTime() > currentDate.getTime() ? (
                        <div key={result.id} className="slide-card">
                        <img src={img_url + result.poster_path} />
                        <div className='content'>
                            <span className='title'>{result.title}</span>
                            <span className='date'>{result.release_date}</span>
                        </div>
                    </div>
                    ):null
                ))
            }
            </div>
        </div>
    </>
  )
}
