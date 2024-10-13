import React from 'react'
import './Programs.css'
import friend from '../../assets/friend.jpg'
import people from '../../assets/people.jpg'
import local_library from '../../assets/local_library.png'
import school from '../../assets/school.png'
import upgrade from '../../assets/upgrade.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={friend} alt="" />
        <div className='caption'>
            <img src={local_library} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={people} alt="" />
        <div className='caption'>
            <img src={school} alt="" />
            <p>Master's Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={friend} alt="" />
        <div className='caption'>
            <img src={upgrade} alt="" />
            <p>Post Graduation </p>
        </div>
      </div>
    </div>
  )
}

export default Programs
