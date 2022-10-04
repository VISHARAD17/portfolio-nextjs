import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    }
    window.addEventListener('scroll', handleShadow);
  }, [])

  return (
    <nav className="fixed w-full h-20 shadow-2xl z-[100] bg-gray-900 font-mono backdrop-filter backdrop-blur-lg bg-opacity-30">
     <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <h1 className='font-[30px] font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>VISHARAD.</h1>
        <div>
          <ul className='cursor-pointer hidden text-white md:flex text-lg'>
            <Link href='/'>
              <li className='ml-10 text-md font-bold uppercase hover:text-[#5651e5] hover:scale-125 ease-out duration-500'>Home</li>
            </Link>
            <Link href='/resume'>
              <li className='ml-10 text-md font-bold uppercase hover:text-[#5651e5] hover:scale-125 ease-out duration-500'>Resume</li>
            </Link>
            <Link href='/skills'>
              <li className='ml-10 text-md font-bold uppercase hover:text-[#5651e5] hover:scale-125 ease-out duration-500'>Skills</li>
            </Link>
            <Link href='/projects'>
              <li className='ml-10 text-md font-bold uppercase hover:text-[#5651e5] hover:scale-125 ease-out duration-500'>Projects</li>
            </Link>
            <Link href='/research'>
              <li className='ml-10 text-md font-bold uppercase hover:text-[#5651e5] hover:scale-125 ease-out duration-500'>Research</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='text-white rounded md:hidden'>
            <AiOutlineMenu size={30}/>
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
        <div className={
          nav ? 
           'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-800 p-10 ease-in duration-500'
          :'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/../public/assets/logo.png" width='87' height = '35' alt = 'navbar-logo' />
              <div onClick={handleNav} className='bg-white rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-400 my-6'>
              <p className=' text-white w-[85%] md:w-[90%] py-2 font-bold'>Software Developer</p>
            </div>
          </div>
          <div className=' text-white font-bold py-1 flex flex-col'>
            <ul className='uppercase'>
              <Link href = '/'>
                <li className=' text-white py-4 text-sm'>Home</li>
              </Link>
              <Link href = '/resume'>
                <li className='py-4 text-sm'>Resume</li>
              </Link>
              <Link href = '/skills'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href = '/projects'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href = '/research'>
                <li className='py-4 text-sm'>Research</li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='uppercase tracking-widest text-[#5651e5] font-bold'> let&apos; connect</p>
              <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full bg-[#5651e5] shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn/>
                </div>
                <div className='rounded-full bg-[#5651e5] shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub/>
                </div>
                <div className='rounded-full bg-[#5651e5] shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail/>
                </div>
                <div className='rounded-full bg-[#5651e5] shadow-lg shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;