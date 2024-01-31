import React from 'react'
import Image from 'next/image'
import { FaHtml5 } from 'react-icons/fa'
import html5Img from '../public/skills/html.png'

// Images used in the page
import cppImg from '../public/skills/c++.png'
import pythonImg from '../public/skills/python.png'
import reactImg from '../public/skills/react.png'
import expressImg from '../public/skills/express.png'
import mongoDBImg from '../public/skills/python.png'

const Skills = () => {
  return (
    <div  className='bg-gray-900 w-full lg:h-screen font-mono'>
        <div className='mx-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <div className='flex justify-center'>
                <h1 className="flex text-center pt-[180px] font-bold text-white"> <span className="m-4 font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Skills</span> </h1>
            </div>
            <h2 className=' text-white pl-4 pt-2 text-xl text-center mb-4 underline underline-offset-4 decoration-2 decoration-indigo-500'>Tech I know</h2>
            <div className='mt-4 grid lg:max-w-[1240px] m-auto justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = {cppImg} alt = 'cpp-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>C++</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = {pythonImg}  alt = 'python-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>Python</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = {reactImg} alt = 'react-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>ReactJS</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = {expressImg} alt = 'express-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>ExpressJS</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = {mongoDBImg} alt = 'mongodb-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>MongoDB</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/next-js.png' alt = 'nextjs-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>NextJS</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/nodejs.png' alt = 'nextjs-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>NodeJS</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/sql.png' alt = 'sql-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>SQL</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/html.png' alt = 'html-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>HTML</h3></div>
                </div>

                {/* ######################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/css3.png' alt = 'css-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>CSS</h3></div>
                </div>

                {/* #################################################################### */}
                <div className='flex justify-center items-center p-6 shadow-lg shadow-black bg-gray-800 rounded-xl hover:scale-110 ease-in duration-300'>   
                    <Image src = '/../public/skills/github.png' alt = 'github-img' width='64px' height='64px' />
                    <div className='ml-4 text-2xl font-bold text-white'><h3>Github</h3></div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills