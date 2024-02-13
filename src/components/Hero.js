import React from 'react'

const Hero = () => {
  return (
    <section className='secondary hero'>
        <header className='hero-header'>
            <h1 className='display-title'>Little Lemon</h1>
            <h3 className='sub-title gray-text'>Chicago</h3>
            <p className='description lead-text white-text'>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
            </p>
            <button className='button'><a href='/reservation' className='card-title'>Reserve a Table</a></button>
        </header>
        <img
            src="/assets/mainfood.jpg"
            alt="food"
            className='hero-img'
        >
        </img>
    </section>
  )
}

export default Hero