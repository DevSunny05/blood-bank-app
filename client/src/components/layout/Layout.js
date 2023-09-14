import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
        <div className="hrader"><Header/></div>
        <div className="content">{children}</div>
    </>
  )
}

export default Layout