import React from 'react'

const Testimonials = () => {
  const reviews_info = [
    {
      name: "Amir Seilsepour",
      stars: 5,
      opinion: "Love it"
    },
    {
      name: "Ashwin Vaswani",
      stars: 4,
      opinion: "Nice but found rat"
    },
    {
      name: "Imansyah Muhamad Putera",
      stars: 4,
      opinion: "Nice spaghetti"
    },
    {
      name: "Judith Ejike",
      stars: 5,
      opinion: "I like it"
    }
  ]

  return (
    <section className='testimonials'>
        <header className='section-title'>What our customers say!</header>
        <section className='opinions'>
            {reviews_info.map((review)=>{
            return  <article className='opinion' key={review.name}>
                      <div className='rating'>
                        {Array.from(Array(review.stars)).map((a,i) => <img key={i} src="/assets/star" alt="star" className='star'/>)}
                      </div>
                      <div className='customer-info'>
                          <img src={"/assets/"+review.name} alt='customer_image' className='profile'></img>
                          <h5>{review.name}</h5>
                      </div>
                      <div className='highlight-text review-text dark-gray-text'>{review.opinion}</div>
                    </article>
            })

            }
        </section>
    </section>
  )
}

export default Testimonials