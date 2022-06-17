import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { fetchPersonDetails } from '../features/details/personDetails'
import './styles/PersonDetails.css'
import { MainPageLayout } from '../components/MainPageLayout'

export const PersonDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const person = useSelector(state => state.personDetails.results)
    const img_url = 'https://image.tmdb.org/t/p/w500'
    const currentDate = new Date()
    const personbirth = new Date(person.birthday)
    const personage = currentDate.getFullYear() - personbirth.getFullYear()
    useEffect(() => {
        dispatch(fetchPersonDetails(id))
    }, [id])
  return (
    <MainPageLayout>
      <div className='detail-page'>
      <div className='leftside'>
        <img src={img_url + person?.profile_path} />
        <div>
          <h3 style={{ padding: '0px'}}>Information</h3>
          <div className='full'>
            <strong>Know as</strong>
            <p>{person.known_for_department}</p>
          </div>
          <div className='full'>
            <strong>Gender</strong>
            <p>{person.gender===1 ? 'female' : 'male'}</p>
          </div>
          <div className='full'>
            <strong>Birthday</strong>
            <p>{person.birthday} ({personage} years old)</p>
          </div>
          <div className='full'>
            <strong>Born in</strong>
            <p>{person.place_of_birth}</p>
          </div>
          {
            person.also_known_as && (
            <div className='full'>
              <strong>Other Names</strong>
              <>
                {person.also_known_as?.map((re, index) => (
                  <p key={index} className='othername'>{re}</p>
                ))}
              </>
          </div>
            )
          }
        </div>
      </div>
      <div className='rightside'>
        <h1 style={{ padding: '0px'}}>{person.name}</h1>
        <div>
          <h3>Biography</h3>
          <p>{person.biography}</p>
        </div>
      </div>
    </div>
    </MainPageLayout>
  )
}





