import React from 'react'
import { NavLink } from 'react-router-dom'

const DoctorRegisterScreen = () => {
  return (
   <>
   <div className='min-h-0 py-20 bg-gradient-to-bl from-[#003a70] to-[#35b6b4]'>
     <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
           <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url("images/DocEHR.jpg")` }}>
              <h1 className='text-[#003a70] hover:text-white font-bold text-2xl lg:text-3xl mb-3'>Welcome To</h1>
              <div>
               <p className='text-[#003a70] hover:text-white font-bold text-2xl lg:text-3xl'>Doctor EHR</p>
              </div>
           </div>
           <div className='w-full lg:w-1/2 lg:py-16 py-12 px-12'>
              <div className='flex justify-between items-center'>
              <h2 className='lg:text-3xl text-2xl font-bold text-[#003a70] hover:text-[#35b6b4] mb-4'>Doctor Registration</h2>
              <img src='../images/doctoricon.jpg' alt='Patient Icon' 
              className='rounded-full lg:w-24 w-16' />
              </div>
              <p className='mb-4 mt-4'>
               Create your account. It's free and only take a minute
              </p>
              <form action='#'>
                <div className='grid grid-cols-2 gap-5'>
                   <input type='text' placeholder='First Name' className='
                 border-solid border-x-2 rounded border-y-2 border-[#003a70]  focus:border-[#003a70] py-1 px-2'/>
                   <input type='text' placeholder='Last Name' className='
                   border-solid border-x-2 rounded border-y-2 border-[#003a70]  focus:border-[#003a70] py-1 px-2'/>
                </div>
                <div className='mt-5'>
                <input type='text' placeholder='Email' className='
                border-solid border-x-2 rounded border-y-2 border-[#003a70] focus:border-[#003a70] py-1 px-2 w-full'/>
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Password' className='
                border-solid border-x-2 rounded border-y-2 border-[#003a70] focus:border-[#003a70] py-1 px-2 w-full'/>
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Confirm Password' className='
                border-solid border-x-2 rounded border-y-2 border-[#003a70] focus:border-[#003a70] py-1 px-2 w-full'/>
                </div>
                <div className='mt-5 flex justify-start items-center w-full'>
                <input type='checkbox' className='border-solid border-x-2 rounded border-y-2 border-[#003a70]'/>
                <span className='ml-2'>
                   I accept the <a href='#' className='text-[#35b6b4] hover:text-[#003a70] font-bold'>Terms of Use</a> & <a href='#' className='text-[#35b6b4] hover:text-[#003a70] font-bold'>Privacy Policy</a>
                </span>
                </div>
                <div className='mt-5'>
                   <button className='w-full bg-[#003a70] rounded hover:bg-[#35b6b4] py-3 text-center text-white'>Register Now</button>
                </div>
              </form>
              <div className='mt-5'>
                 <h2>Is doctor already registered ?
                 <NavLink to='/doctorlogin' className='text-[#35b6b4] ml-2 hover:text-[#003a70] font-bold'>
                    Login
                 </NavLink>
                 </h2>
              </div>
           </div>
        </div>
     </div>
   </div>
</>
  )
}

export default DoctorRegisterScreen
