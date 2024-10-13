import React from 'react'
import './Campus.css'
import graduate from '../../assets/graduate.jpg'
import friend from '../../assets/friend.jpg'
import people from '../../assets/people.jpg'
import arrow from '../../assets/arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={graduate} alt="" />
        <img src={friend} alt="" />
        <img src={people} alt="" />
        <img src={graduate} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Campus
