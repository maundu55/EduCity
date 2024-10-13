import React, { useEffect, useState } from 'react'
import './Navbar.css'


const Navbar = () => {
  const [sticky, setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    });
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}> 
      {/* <img src="" alt="" className="logo"/> */}
      <h2 className='logo'>EduCity</h2>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
