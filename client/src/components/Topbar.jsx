import React,{useState} from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import DoctorNavbar from './Doctor/DoctorNavbar';


const Navbaritem = ({title,classprops}) => (
  <li className={`mx-4 cursor-pointer  hover:text-[#003a70] ${classprops}`}>{title}</li>
);

const Topbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const CloseDown = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };
  return (
    
      <nav className='w-full flex md:justify-center justify-end items-center p-3 rounded-full bg-[#35b6b4]'>
        {/* <div className="md:flex-[0.5] justify-center items-center">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div> */}
        <ul className='text-white md:flex hidden list-none flex-row justify-center items-center flex-initial'>
          {/* {["Find a Doctor","Home","My Reports","Investors","About Us","Contact Us"].map((item,index)=>(
            <Navbaritem key={item + index} title={item}/>
          ))} */}

           <NavLink to='/' className='active:text-[#003a70]'>
           <li className='mx-4 cursor-pointer  hover:text-[#003a70]'>Home</li>
           </NavLink>
           {/* <NavLink to='/register'>
           <li className='bg-[#2952e3] mx-4 px-7 py-1 rounded-full cursor-pointer hover:bg-[#003a70]'>Register</li>
           </NavLink> */}
           {/* <NavLink to='/login'>
           <li className='bg-[#2952e3] mx-4 px-7 py-1 rounded-full cursor-pointer hover:bg-[#003a70]'>Login</li>
           </NavLink> */}
           <NavLink to='/patient'>
           
           <li className='bg-[#2952e3] mx-4 px-7 py-1 rounded-full cursor-pointer hover:bg-[#003a70]'>
           <div className='flex flex-row justify-center items-center' onClick={CloseDown}>
            Patient
           {!toggleMenu && ( 
              <RiArrowDropDownLine size='1.5rem' className="ml-1 cursor-pointer" onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <AiOutlineClose  className="text-md ml-2 cursor-pointer" onClick={() => setToggleMenu(false)} />
            )}
            
            </div>
           </li>
           
          
           </NavLink>
           <NavLink to='/doctor'>
           <li className='bg-[#2952e3] mx-4 px-7 py-1 rounded-full cursor-pointer hover:bg-[#003a70]'>Doctor</li>
           </NavLink>
           <NavLink to='/admin'>
           <li className='bg-[#2952e3] mx-4 px-7 py-1 rounded-full cursor-pointer hover:bg-[#003a70]'>Admin</li>
           </NavLink>
          
        </ul> 
        <div className="flex relative">
    {!toggleMenu && (
      <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
    )}
    {toggleMenu && (
      <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
    )}
    {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <Navbaritem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
    </div>

      </nav>
      
    
  )
}

export default Topbar
