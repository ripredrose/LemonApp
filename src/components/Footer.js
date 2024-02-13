import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
      <img src="/assets/restaurant chef B.jpg" alt='chef' width={200} height={300} />
      <section className='media'>
        <section className='media-card'>
         <h5>Doormant Navigation</h5>
         <ul className='bottom-links'>
          <Nav props="footer"/>
         </ul>
        </section>
        <section className='media-card'>
          <h5>Contact</h5>
          <ul className='bottom-links'>
            <li>Chicago, 54st messecedes </li>
            <li>123 123 123</li>
            <li>littleLemonRestaurant@email.com</li>
          </ul>
        </section>
        <section className='media-card'>
          <h5>Social Media Links</h5>
          <ul className='bottom-links'>
            <li>facebook.pl/littleLemonRestaurant</li>
            <li>123 123 123</li>
            <li>littleLemonRestaurant@email.com</li>
          </ul>
        </section>
      </section>
    </footer>
  )
}

export default Footer