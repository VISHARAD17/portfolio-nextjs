import {BsArrowRight} from 'react-icons/bs'
import codeGif from '../public/assests/code.gif'
import Image from 'next/image';
import Link from 'next/link';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {SiCodeforces, SiLeetcode} from 'react-icons/si'

const Main = () => {
    return ( 
        <div className=" bg-gray-900 font-mono">
            <div class="grid lg:grid-cols-2 h-screen place-items-center max-w-[1240px] m-auto md:grid-cols-1 sm:grid-cols-1">
                <div className="text-white bg-gray-900 p-4 mt-[110px] max-w-[600px] text-widest">
                    <h1 className="text-4xl p-4 hover:scale-110 duration-300">Hi, I am 
                        <span className="m-4 font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Visharad</span>
                    </h1>
                    <h2 className='pl-4 pt-2 text-lg underline underline-offset-4 decoration-2 decoration-indigo-500'>A Software Engineer</h2>
                    <p className="text-md mt-4 p-4">&nbsp; My name is Visharad Borsutkar. I am from Ratnagiri, Maharashtra, India. 
                        At present, I am a final year undergraduate student at IIT Madras, pursuing Dual Degree in Naval Architure and Ocean Engineering. 
                        Expected graduation month is June 2023.
                    </p>
                    <p className='px-4 text-md'>
                            &nbsp; Currently I am working on the development of web-based software to estimate wave response and drift forces on a vessel 
                            in forward speed.
                    </p>
                    <p className='p-4 text-md'>
                        &nbsp; I am interested in full stack development for web and mobile applications. 
                        Other interests include Data Science, Machine learning and studying Wave-body interations
                        Check out my profile below ~
                    </p>
                    
                    <div className='flex p-4'>
                        <div className='rounded-full bg-gray-100 text-black shadow-lg shadow-gray-900 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn title='Linkedin'/>
                        </div>
                        <div className='rounded-full bg-gray-100 text-black shadow-lg shadow-gray-900 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub title='Github'/>
                        </div>
                        <div className='rounded-full bg-gray-100 text-black shadow-lg shadow-gray-900 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <SiLeetcode title='Leetcode' />
                        </div>
                        <div className='rounded-full bg-gray-100 text-black shadow-lg shadow-gray-900 m-3 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <SiCodeforces title='Codeforces' />
                        </div>
                    </div>
                    <div className='flex pt-4 p-4 hover:scale-110 duration-300 items-center cursor-pointer'>
                        <Link href = '/resume'><p className='text-cl mr-4'>Know More</p></Link>
                        <BsArrowRight className='ml-4' size={30}/>
                    </div>
                </div>
                <div className="bg-gray-900 max-w-[600px]">
                    <Image className='max-w-[200px] h-auto rounded-xl pb-[150px]' src = {codeGif} alt = 'profile-gif' />
                </div>
            </div>
        </div>
     );
}
 
export default Main;