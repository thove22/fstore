'use client'
import React,{ useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { RiMenu3Fill, RiCloseLargeFill} from "react-icons/ri";
import { navlinks } from '@/data/Udata';
import {  MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
 const [isMenuopened,setIsMenuopened] = useState(false);
 
 const toggleMenu = () =>{
    setIsMenuopened(!isMenuopened);
    console.log("Menu clicked")
 }
  return (
    <nav className='p-4 overflow-x-hidden'>
        <div className=' mx-auto flex items-center justify-between lg:px-6 xl:px-10'>
         <div className='flex space-x-2 items-center'>
            <div className=''>
                <Image
                    src="/images/logo-banner.svg"
                    alt='logo-banner'
                    width={32}
                    height={32}
                />
            </div>
            <h3 className='font-bold font-manr text-xl md:text-2xl'>Furniro</h3>
         </div>
         <div className='flex space-x-4 lg:hidden'>
            <button className='hidden sm-block'>
                <MdOutlineShoppingCart size={24}/>
            </button>
            <button onClick={toggleMenu} className='z-20'>
               {isMenuopened ? <RiCloseLargeFill size={24}/> : <RiMenu3Fill size={24}/> }
            </button>
         </div>
          <div className={`fixed top-0 left-0 w-full h-screen z-10 bg-white ${isMenuopened ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className='flex flex-col items-center justify-center h-full gap-4 -mt-3'>
                <h6 className='text-2xl font-bold'>Menu</h6>
               <ul className='flex flex-col justify-center items-center space-y-5'>
                   {navlinks.map(({label, path}, index)=>(
                   <li key={index}>
                    <Link href={path} className='text-xl px-16 py-2 rounded-lg transition-colors active:bg-gray-50 cursor-pointer'>{label}</Link>
                   </li>
                   ))}                                   
               </ul>
           </div>
        </div>
         <div className='hidden lg:flex lg:space-x-8 xl:space-x-12'>
             <ul className='flex space-x-10'>
            {navlinks.map(({label, path})=>(
             
                 <li key={path}>
                    <Link className='xl:font-semibold ' href={path}>{label}</Link>
                 </li>              
            ))}
            </ul>
         </div>
        <div className='hidden lg:flex space-x-12'>
            <button> <IoSearchOutline/></button>
            <button> <FaRegHeart/></button>
            <button> <MdOutlineShoppingCart/></button>
            <button> <FaRegUser/></button>
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar
