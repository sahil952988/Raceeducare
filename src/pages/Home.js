import React from 'react'
import logo from "../Assets/logo.jpg"
import shammer from "../Assets/shamrock.jpg"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <div className=" items-center ">
        <div className="left_side ml-5 mr-3">

          <p className=' text-[40px] font-bold mt-5 text-white text-center'>We are coming Soon</p>

          <p className='text-[20px] font-semibold font-sans text-white text-centre
           mt-5'><p className='text-center'>☘️Welcome to Study in Ireland from Nepal.</p>
            <p className='text-center'>☘️We specialize in helping students from Nepal achieve their dream of studying in Ireland. </p>
            <p className='text-center'>☘️With our expert guidance and support, you can make your journey smooth and successful.</p>
          </p>
          <div className="logo mt-5 flex justify-center">
            <img className='rounded-full w-40' src={logo} alt="" />
          </div>

          <form className='space-x-5 mt-10 flex justify-center'>
            <input className='outline-none pl-5 sm:w-[400px] border-2 border-black h-10' type="email" placeholder='enter email' required />
            <button type='submit' className='bg-green-400 px-3 py-2 hover:bg-black hover:text-white'>Sumbit</button>
          </form>

          <div className="contact flex justify-center space-x-5 mt-5">
            <div className="watsap">
              <a href="https://wa.me/+9779803100720" target='_blank'><p className=' text-[30px] text-white'><i class="fa-brands fa-whatsapp"></i></p></a>
            </div>

            <div className="facebook">
              <a href="https://www.facebook.com/irelandfromnepal" target="_blank"><p className='text-[30px] text-white'><i class="fa-brands fa-facebook"></i></p></a>
            </div>

            <div className="email space-x-5 flex">
              <p className='text-[30px] text-white'><i class="fa-solid fa-envelope"></i> </p><p className='sm:text-[16px] text-[12px] text-white mt-3  cursor-pointer'><i><u>admissions@studyinireland.info</u></i></p>
            </div>

          </div>

          <div className="flex justify-center mt-3">
            <NavLink to='/Apply'><button className="apply_btn flex  pl-3 py-2  text-white bg-green-400 space-x-3 pr-2 rounded-[7px]">
              <p className=' text-[20px]sm:mr-40 cursor-pointer text-center'>Apply Now</p>
              <p><i class="fa-brands fa-telegram"></i></p>
            </button></NavLink>
          </div>

        </div>
      </div>
    </>
  )
}
export default Home