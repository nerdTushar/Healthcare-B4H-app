import React,{useState} from 'react'
import logo from "../../images/logo B4H.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Navbaritem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer hover:text-[#35b6b4] ${classprops}`}>{title}</li>
);

const Belowbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className='w-full flex flex-initial justify-between md:justify-center items-center'>
      <div className='md:flex-[0.5] flex-initial'>
      <img src={logo} alt="logo" className="w-40 cursor-pointer" />
      </div>
      <div className='flex-initial '>

      <nav className='w-full flex md:justify-center justify-end items-center p-2 rounded-full bg-[#35b6b4]'>
        {/* <div className="md:flex-[0.5] justify-center items-center">
            <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div> */}
        <ul className='text-white md:flex hidden list-none flex-row justify-center items-center flex-initial'>
           <NavLink to='/'>
           <li className='mx-4 cursor-pointer text-lg font-semibold hover:text-[#003a70]'>Home</li>
           </NavLink>
           <NavLink to='/patientregister'>
           <li className='mx-4  cursor-pointer text-lg  font-semibold hover:text-[#003a70]'>
            Patient
           </li>
           </NavLink>
           <NavLink to='/doctorregister'>
           <li className='mx-4  cursor-pointer text-lg font-semibold hover:text-[#003a70]'>Doctor</li>
           </NavLink>
           <NavLink to='/admin'>
           <li className='mx-4  cursor-pointer text-lg font-semibold hover:text-[#003a70]'>Admin</li>
           </NavLink>
        </ul> 
        <div className="flex relative">
    {!menu && (
      <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setMenu(true)} />
    )}
    {menu && (
      <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setMenu(false)} />
    )}
    {menu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setMenu(false)} /></li>
            <NavLink to='/'>
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Home</li>
            </NavLink>
            <NavLink to='/patientregister'>
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Patient</li>
            </NavLink>
            <NavLink to='/doctorregister'>
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Doctor</li>
            </NavLink>
            <NavLink to='/admin'>
            <li className='my-2 text-lg mx-4 font-semibold cursor-pointer hover:text-[#35b6b4]'>Admin</li>
            </NavLink>
          </ul>
        )}
    </div>

      </nav>

      </div>
      </div>
      <div className='flex justify-center p-4'>
        
        <ul className='md:flex hidden list-none flex-row text-[#003a70] font-bold justify-center items-center flex-initial'>
          {["Hospitals","Treatments","Services","Academics","International Patients","Quick Enquiry"].map((item,index)=>(
            <Navbaritem key={item + index} title={item}/>
          ))}
        </ul> 
        
      </div>
    </>
  )
}

export default Belowbar
