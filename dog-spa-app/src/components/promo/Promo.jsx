import React from 'react'
import './promo.css'

export default function Promo() {
  return (
    <section className="promo">
        
        <p>Get 20% OFF When You Book A Spa Day For Your Animal Today!</p>
        <div className="container">
            <div className="promo__content">
            <div className="promo__text">Your dog running amok in the dirt? <br/>Book your doggy spa day!</div>
            <button className='btn' >Book Appointment</button>
            
        </div>
        </div>
    </section>
  )
}

