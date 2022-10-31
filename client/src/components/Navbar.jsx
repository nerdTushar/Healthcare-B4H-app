import React,{useState} from 'react'
import Cards from './Cards';
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Navbaritem = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    
      <nav className='w-full flex md:justify-center justify-center items-center cursor-pointer p-1 bg-[#003a70]'>
        <div className='text-white items-center justify-center'>
            <div className='flex flex-col justify-center items-center'>
           <div className='flex flex-row justify-center items-center' onClick={Navbaritem}>
           <h1 className='text-center text-xl' onClick={Navbaritem}>Membership & Plans </h1>
            {!toggleMenu && ( 
              <RiArrowDropDownLine className="text-4xl cursor-pointer" onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <AiOutlineClose  className="text-xl ml-2 cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
           </div>
            {toggleMenu && (
               <span>
               <h1 className='mt-10 mb-2 text-center capitalize text-4xl'>Our Plans</h1>
            <hr className='w-5/5 mx-auto'/>
            <div className='md:flex w-full gap-20 md:space-y-0 space-y-10 mb-6 mt-10'>
              <Cards />
              <Cards /> 
              <Cards />
            </div>
               </span>
            )}
            </div>
        </div>
      </nav>
    
  )
}

export default Navbar

