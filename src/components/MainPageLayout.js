import React from 'react'
import { Nav } from './Nav'

export const MainPageLayout = ({ children, style }) => {
  return (
    <div style={style}>
        <Nav/>
        {children}
    </div>
  )
}
