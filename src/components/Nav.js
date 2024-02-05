import React from 'react'

const Nav = () => {
  //const menu_list = ["Home","About","Menu","Reservations","Order Online","sign-in"];
  return (
    <ul className="menu_list ">
       <li><a href='/Home' className='card-title'>Home</a></li>
       <li><a href='/About' className='card-title'>About</a></li>
       <li><a href='/Menu' className='card-title'>Menu</a></li>
       <li><a href='/Reservations' className='card-title'>Reservations</a></li>
       <li><a href='/Order' className='card-title'>Order Online</a></li>
       <li><a href='/sign-in' className='card-title'>Login</a></li>
    </ul>
  )
}

export default Nav