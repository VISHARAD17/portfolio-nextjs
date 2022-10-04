import { Link } from "react-scroll";
import Image from "next/image";
import resumeImg from '../public/assests/resume_ss.png';
import { AiOutlineLike, AiOutlineLink } from "react-icons/ai";

const resume = () => {
    return ( 
        <div className="bg-gray-900 pb-[10px]">
            <div className="flex justify-center align-middle items-center col-span-2 cursor-pointer">
                    <h1 className="flex text-center pt-[180px] font-bold text-white"> <span className="m-4 font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Resume</span> </h1>
                    <a className = "text-white bg-blue-500 mt-[180px] p-3 ml-4 rounded-full" href="https://en.wikipedia.org/wiki/Next.js" target='_blank' rel="noopener noreferrer">Download</a>
                    {/* <a className="" href="www.google.com">Download</a> */}
            </div>
            <div className="flex justify-center pt-10 pb-10">
                <div className="text-white flex justify-center p-5 bg-gray-500 rounded-xl">
                    <Image className="rounded h-auto" src = {resumeImg} alt = 'resume-image'/>
                </div>
            </div>
        </div>
    );
}
 
export default resume;