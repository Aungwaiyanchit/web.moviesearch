import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link , useNavigate, useSearchParams} from 'react-router-dom'
import './styles/Nav.css'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux/'
import { SearchQuery } from '../features/search/searchSlice'
import { IoMenuSharp } from 'react-icons/io5'

export const Nav = () => {
    const [ open, setOpen ] = useState(false)
    const [ input, setInput ] = useState(localStorage.getItem('lastVale')?.toString())
    const navigate = useNavigate()
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ isNavExpended, setIsNavExpended ] = useState(false)

    const navItems = [
    { path: '/', text: 'Home' },
    { path: '/movies', text: 'Movies' },
    { path: '/tv-shows', text: 'Tv Shows' },
    ]
    const dispatch = useDispatch()
    const inputRef = useRef(null)

  const onSearch =  (e) => {
   if(input){
    if(e.keyCode === 13){
       navigate({
        pathname: '/search',
        search: `?q=${input}`,
       })
       dispatch(SearchQuery(input))
     }
   }
  }
  useEffect(() => {
    if (searchParams.get('q')){
      setOpen(true)
      
    } else{
      setOpen(false)
    }
  },[searchParams.get('q')])

  useEffect(() => {
    if(input && open){
      document.addEventListener('keydown', onSearch)
      localStorage.setItem('lastVale', input)
    } 
    return () => document.removeEventListener('keydown', onSearch)
  },[input, open])

 
  
  return (
    <div className='nav'>
      <div className='nav-container'>
      <IoMenuSharp className='menu-icon' onClick={() => setIsNavExpended(!isNavExpended)}/>
       <span className='Logo'>Logo</span>
        <div  className={!isNavExpended ? 'navitems' : 'navitems expanded'}>
            {navItems.map((item, index) => (
                <NavLink key={index} to={item.path} className={({isActive}) => "nav-link" + (isActive ? " selected": "")}>{item.text} </NavLink>
            ))}
           
        </div> 
           {
            !open  ? (
              <div onClick={() =>{ setOpen(!open) }}><AiOutlineSearch style={{ fontSize: '1.5rem', color: 'white', cursor: 'pointer' }}/></div>
            ): (
              <div onClick={() => setOpen(!open)}><AiOutlineClose style={{ fontSize: '1.5rem', color: 'white',  cursor: 'pointer'}}/></div>
            )
           }
    </div>
    {open ? (
      <div >
      <input 
      className={ open ? 'input ' : 'input hide'}
      placeholder='Search for a movie or Tv show'
      defaultValue={localStorage.getItem('lastVale')}
      onChange={() => setInput(inputRef.current.value)}
      onClick={onSearch}
      ref={inputRef}
      />
      <AiOutlineClose className="btn-close" onClick={() => {
        localStorage.removeItem('lastVale')
        setInput('');
        }}/>
    </div>
    ):null}
    </div>
 
  )
}
