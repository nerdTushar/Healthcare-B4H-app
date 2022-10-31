import React from 'react'
import ItemsContainer from './ItemsContainer'
import {AiFillFacebook,AiFillTwitterSquare,AiFillGithub,AiFillLinkedin,AiFillInstagram,AiOutlineSearch} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
          <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
          md:w-2/5'><span className='text-teal-400'>B4H</span> Healthcare for secured Health Data</h1>
          
          <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                   <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-10 w-full md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Doctor, Hospital ..." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>
        </div>
        <ItemsContainer />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2
        text-gray-400 text-sm pb-8'>
            <span>0 2020 Appy. All rights reserved.</span>
            <span>Terms - Privacy Policy</span>
            <div className='text-teal-500'>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300'> 
           <AiFillFacebook />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300'> 
           <AiFillTwitterSquare />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300'> 
           <AiFillGithub />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300'> 
           <AiFillLinkedin />
            </span>
            <span className='p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300'> 
           <AiFillInstagram />
            </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
