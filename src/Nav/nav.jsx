import React, { useState } from 'react';
import Linker from './link';
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../assets/Logo.webp'


const NavMenu = () => {

    const routes =[
        { "id": 1, "path": "/", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/contact", "name": "Contact" },
        { "id": 5, "path": "/users", "name": "Users" }
      ]
   
      const [open,setOpen]=useState(false);

    return (
        <>
        <nav className=' mx-auto bg-blue-950 py-3 flex justify-between items-center px-3 overflow-hidden'>
       
        <div className='flex-1/3 lg:flex-auto'> 
        <a className='' href='/'><img className='w-50' src={Logo} alt="Site Logo" /></a>
        </div>
        <div  className=' md:hidden text-2xl overflow-hidden duration-2000  '>
            <button className='cursor-pointer ' onClick={()=>setOpen(!open)}> {

                open? 
                <AiOutlineClose ></AiOutlineClose>

                :<RiMenu3Fill></RiMenu3Fill> 

            }</button>
            </div>

           <div className=' lg:flex-3/5'>
           <ul className={` absolute top-18 overflow-hidden
                ${
                    open?
                    '  right-2 transition-all rounded-lg border border-gray-700'
                    
                    :
                    '-right-96  transition-all '
                }
                 lg:static flex lg:flex-row flex-col gap-2 lg:gap-7 justify-center w-45 lg:w-auto bg-gray-800 lg:bg-transparent p-2 lg:p-0  `}>
                {
                    routes.map((route,idx)=><Linker key={idx} route={route}></Linker>)
                } 
            </ul>
           </div>
            
            <div className='hidden lg:inline-flex '>
                <a href="/contact"><button className='btn bg-amber-600 text-lg'>Get in Touch</button></a>
            </div>  
        </nav>
        </>
        
    );
};

export default NavMenu;