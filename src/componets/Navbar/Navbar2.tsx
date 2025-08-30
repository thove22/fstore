// 'use client'
// import React,{ useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import { RiMenu3Fill, RiCloseLargeFill} from "react-icons/ri";
// import { navlinks } from '@/data/Udata';
// import {  MdOutlineShoppingCart } from "react-icons/md";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaRegUser, FaRegHeart } from "react-icons/fa6";


// const Navbar2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const toggleMenu = () =>{
//     setIsMenuOpen(!isMenuOpen);
//   }

//   return (
//     <div className=' py-2 px-4 flex justify-between items-center '>
//         <div className='flex i<tems-center space-x-2.5'>
//             <Image
//                   src="/images/logo-banner.svg"
//                   width={32}
//                   height={32}
//                   alt='logo-banner'
//              />
//              <h3 className='font-semibold font-Manr'>Furniro</h3>
//         </div>
//         <div className="flex space-x-3 lg:hidden">
//           <button className='hidden sm:block'>
//              <MdOutlineShoppingCart size={24}/>
//           </button>
//           <button onClick={toggleMenu}  className='z-30 p-3' >
//             {isMenuOpen ? <RiCloseLargeFill size={24}/> : <RiMenu3Fill size={24}/>}
//           </button>
//         </div>

//         <div className={`fixed top-0 left-0 w-full h-screen z-10 bg-white ${isMenuOpen ? 'translate-x-0': 'translate-x-full'}`}>
//           <div className='flex flex-col items-center justify-center h-full gap-4 -mt-3 '>
//               <h5 className='text-3xl font-bold'>Menu</h5>
//               <ul className='flex flex-col space-y-5 items-center justify-center'>
//                 {navlinks.map(({label,path})=>(
//                   <li key={path}>
//                       <Link href={path} className='text-2xl'>{label}</Link>
//                   </li>
//                 ))}
//               </ul>
//           </div>
//         </div>
//         <div className='hidden lg:flex space-x-3'>
//           {
//             navlinks.map(({label,path})=>(
//                 <ul>
//                   <li>
//                     <Link href={path}> {label} </Link>
//                   </li>
//                 </ul>
//             ))}
//         </div>
//         <div className='flex space-x-3'>
//           <ul className='flex space-x-3'>
//             <li><IoSearchOutline/></li>
//             <li><IoSearchOutline/></li>
//             <li><IoSearchOutline/></li>
//             <li><IoSearchOutline/></li>
//           </ul>
//         </div>

//     </div>
//   )
// }

// export default Navbar2
