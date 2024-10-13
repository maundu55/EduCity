import React from 'react'
import './Campus.css'
import graduate from '../../assets/graduate.jpg'
import graduation from '../../assets/graduation.jpg'
import people from '../../assets/people.jpg'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={graduate} alt="" />
        <img src={graduation} alt="" />
        <img src={people} alt="" />
      </div>
    </div>
  )
}

export default Campus
