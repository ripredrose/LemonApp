import React from 'react'

const Highlight = () => {
  return (
    <div className='highlight-flex'>
      <div className='highlight'>
        <div className='highlight-header'>
          <h1 className='lead-text section-title2'>Specials</h1>
          <button className='button'><a href='/menu' className='card-title'>Online Menu</a></button>
        </div>
        <div className='cards'>
          <div className='card'>
            <img src='/assets/salad.jpg' alt="salad"  className='card-image'></img>
            <div className='card-spacing'>
              <div className='flex-between'>
                <h6 className='card-text'>Greek Salad</h6>
                <p className='section-categories' style={{color:"#EE9972"}}>$ 12.99</p>
              </div>
              <p className='highlight-text'>The famous greek salad of crispy lettuce,
                peppers, olives and our Chicago style feta cheese,
                garnished with crunchy garlic and rosemary croutons. </p>
              <p className='section-categories'>Order a fast delivery &#9855;</p>
            </div>
          </div>
          <div className='card'>
            <img src='/assets/bruchetta.jpg' alt="bruchetta" className='card-image'></img>
            <div className='card-spacing'>
              <div className='flex-between'>
                <h6 className='card-text'>Bruschetta</h6> 
                <p className='section-categories' style={{color:"#EE9972"}}>$ 5.99</p>
              </div>
              <p className='highlight-text'>Our Bruschetta is made from grilled
              bread that has been smeared with garlic and seasoned with salt and
              olive oil.  </p>
              <p className='section-categories'>Order a fast delivery &#9855;</p>
            </div>
          </div>
          <div className='card'>
            <img src='/assets/lemon dessert.jpg' alt="lemon dessert"  className='card-image'></img>
            <div className='card-spacing'>
              <div className='flex-between'>
                <h6 className='card-text'>Lemon dessert</h6>
                <p className='section-categories' style={{color:"#EE9972"}}>$ 5.00</p>
              </div>
              <p className='highlight-text'>This comes straight from grandma’s
              recipe book, every last ingredient has been sourced and is
              as authentic as can be imagined. </p>
              <p className='section-categories'>Order a fast delivery &#9855;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlight