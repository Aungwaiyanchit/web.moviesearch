import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link , useNavigate, useSearchParams} from 'react-router-dom'
import './styles/Nav.css'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux/'
import { SearchQuery } from '../features/search/searchSlice'
import { IoMenuSharp } from 'react-icons/io5'

export const Nav = () => {
    const [ open, setOpen ] = useState(false)
    const [ input, setInput ] = useState('')
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
    console.log(input);
    useEffect(() => {
      if(localStorage.getItem('q')){
        setInput(localStorage.getItem('q'))
      }else{
        setInput('')
      }
    },[localStorage.getItem('q')])

  const onSearch =  (e) => {
   if(input){
    if(e.keyCode === 13){
       navigate({
        pathname: '/search',
        search: `?q=${input}`,
       })
       localStorage.setItem('lastVale', input)
       dispatch(SearchQuery(input))
     }
   }
  }
  useEffect(() => {
    if (searchParams.get('q')){
      setOpen(true)
      localStorage.setItem('lastVale', searchParams.get('q'))
    } else{
      setOpen(false)
      localStorage.removeItem('lastVale')
    }
  },[searchParams.get('q')])

  useEffect(() => {
    if(input && open){
      document.addEventListener('keydown', onSearch)
    } 
    return () =>{ 
      document.removeEventListener('keydown', onSearch)
    }
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
      <div style={{ width: '100%'}}>
      <input 
      className={ open ? 'textinput' : 'textinput hide'}
      placeholder='Search for a movie or Tv show'
      defaultValue={localStorage.getItem('lastVale')}
      onChange={() => setInput(inputRef.current.value)}
      onClick={onSearch}
      ref={inputRef}
      />
      <AiOutlineClose className={ open? 'btn-close' : 'btn-close hide'}onClick={() => {
        setInput('')
        localStorage.removeItem('lastVale')
        }}/>
    </div>
    </div>
 
  )
}
