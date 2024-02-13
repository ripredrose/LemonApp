import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <article>
        <section>
          <header>
            <h1 className='display-title'>Little Lemon</h1>
            <h3 className='sub-title dark-gray-text'>Chicago</h3>
          </header>
          <p className='about-text lead-text'>
            Fifteen years ago it was our dream to open a restaurant.
            We are family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. We are
            happy to see you in our Little Lemon restaurant
          </p>
        </section>
        <aside>
          <img src='/assets/Mario and Adrian B.jpg' alt='Mario and Adrian B' className='img-about img-about-b'/>
          <img src='/assets/Mario and Adrian A.jpg' alt='Mario and Adrian A' className='img-about img-about-a'/>
        </aside>
      </article>
    </section>
  )
}

export default About