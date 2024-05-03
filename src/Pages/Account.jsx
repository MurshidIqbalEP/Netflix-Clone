import React from 'react'
import SavedShow from '../Components/SavedShow'

function Account() {
  return (
    <>
      <div className=' w-full text-white'>
      <img  className='  w-full h-[400px] object-cover'  src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
      <div className='bg-block/60 fixed top-0 left-0 w-full h-[550px]'></div>
      
      <div className='absolute top-[20%] p-4 md:p-8 '>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
      </div>
      < SavedShow />
    </>
  )
}

export default Account
