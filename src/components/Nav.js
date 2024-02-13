import React from 'react'

const Nav = (props) => {
  //const menu_list = ["Home","About","Menu","Reservations","Order Online","sign-in"];
  const style = props.props==="header"?"card-title":"footer-link"
  return (
     /* {menu_list.map((name)=>{
          return  <li><a href="/"+{name} className='card-title'>li</a></li>
        })} */
        <>
        <li><a href='/Home' className={style}>Home</a></li>
        <li><a href='/About' className={style}>About</a></li>
        <li><a href='/Menu' className={style}>Menu</a></li>
        <li><a href='/Reservations' className={style}>Reservations</a></li>
        <li><a href='/Order' className={style}>Order Online</a></li>
        <li><a href='/sign-in' className={style}>Login</a></li>
        </>
  )
}

export default Nav