import React from 'react'
import Nav from './Nav'
const Header = () => {
  return (
    <header className='top-header'>
        <img src='/assets/Asset 16@4x.png' alt="Little Lemon Logo"></img>
        <nav className='header-nav'>
          <ul className="page-links ">
            <Nav props="header"/>
          </ul>
        </nav>
    </header>
  )
}

export default Header