import React from 'react'
import './Programs.css'
import friend from '../../assets/friend.jpg'
import people from '../../assets/people.jpg'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={friend} alt="" />
      </div>
      <div className='program'>
        <img src={people} alt="" />
      </div>
    </div>
  )
}

export default Programs
