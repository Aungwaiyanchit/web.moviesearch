import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { fetchPersonDetails } from '../features/details/personDetails'

export const PersonDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const person = useSelector(state => state.personDetails.results)
    const img_url = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        dispatch(fetchPersonDetails(id))
    }, [id])
  return (
    <div>
      PersonDetail
      <img src={img_url + person?.profile_path} />
    </div>
  )
}





