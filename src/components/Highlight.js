import React from 'react'

const list = [{
  name: "salad",
  title:"Greek Salad",
  descrtiption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  price: '12.99'
},
{
  name: "bruschetta",
  title:"Bruschetta",
  descrtiption: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
  price: '5.99'
},
{
  name: "lemon dessert",
  title:"Lemon dessert",
  descrtiption: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  price:  '5.00'
}
]

const Highlight = () => {
  return (
    <section className='highlight-flex'>
      <div className='highlight'>
        <header className='highlight-header'>
          <h1 className='lead-text section-title2'>Specials</h1>
          <button className='button'><a href='/menu' className='card-title'>Online Menu</a></button>
        </header>

        <section className='cards'>
          {
            list.map((list)=>{
              return <article className='card' key={list.name}>
                      <img src={'/assets/'+list.name+".jpg"} alt={list.name}  className='card-image'></img>
                      <div className='card-spacing'>
                        <div className='flex-between'>
                          <h6 className='card-text'>{list.title}</h6>
                          <p className='section-categories cash-text'>$ {list.price}</p>
                        </div>
                        <p className='highlight-text'>{list.descrtiption}</p>
                        <p className='section-categories'>Order a fast delivery &#9855;</p>
                      </div>
                  </article>
            })
          }
        </section>
      </div>
    </section>
  )
}

export default Highlight