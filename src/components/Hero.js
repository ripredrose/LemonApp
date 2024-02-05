import React from 'react'

const Hero = () => {
  return (
    <div className='secondary hero'>
        <div className='hero-header'>
            <h1 className='display_title'>Little Lemon</h1>
            <h3 className='sub-title white'>Chicago</h3>
            <p className='description lead-text white'>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
            </p>

            <button className='button'><a href='/reservation' className='card-title'>Reserve a Table</a></button>
        </div>
        <img
            src="/assets/mainfood.jpg"
            alt="food"
            className='hero-img'
        >
        </img>
    </div>
  )
}

export default Hero