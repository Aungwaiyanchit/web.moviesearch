import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const Wrapper = ({ children }) => {
    const loaction = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0,0);
    },[loaction])
    return children
}
