import React from 'react'
import logoImg from'./../../img/logoImg.svg'
import search from'./../../img/search.svg'
import shoppingbag from'./../../img/shoppingbag.svg'
import user from'./../../img/user.svg'
import './header.css'

export default function Header() {
  return <header className='header'>
    <div className="container">
      <div className="header__row">
        <div className="header___logo">
          <img src={logoImg} alt="Logo"/> 
          <div className='spa' > Luxe Animal Spa</div>
          </div>
          <div className="header__nav">
            <ul>
              <li><a href="#!" className='header__nav-btn'>Home</a></li>
              <li><a href="#!">Products</a></li>
              <li><a href="#!">Spa Services</a></li>
              <li><a href="#!">Book Appointment</a></li>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Contact Us</a></li>
            </ul>
            <div className="icons">
              <img src={search} alt="" />
              <img src={shoppingbag} alt="shoppingbag" />
              <img src={user} alt="user" />
            </div>


          </div>
      </div>
    </div>
  </header>
 
  
}
