import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <>
        <div className='flex justify-content-center container my-36'>
            <form className='shadow-lg p-3 rounded-xl'>
              <input className='w-full p-2 my-2 border ' placeholder='First Name' type="text" />
              <input className='w-full p-2 my-2 border ' placeholder='Last Name' type="text" />
              <input className='w-full p-2 my-2 border ' placeholder='Email' type="text" />
              <input className='w-full p-2 my-2 border ' placeholder='Password' type="text" />
              <button className='btn btn-primary'>Sign Up</button>
            </form>
        </div>
    </>
  )
}

export default Signup