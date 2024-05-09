import React from 'react'
import logo from "../Assets/logo.jpg"
import { NavLink } from 'react-router-dom'
import bgvideo from "../Assets/Ireland  - The Making of  You.mp4"
import Header from '../components/Header'

const Home = () => {
  return (
    <>

      <div className=" items-center ">

        <div className="left_side  mr-3  flex flex-col justify-center">
          <Header />
          <p className='mt-10 text-[40px] font-bold  text-white text-center'>Our Website is coming Soon</p>

          <div className="logo mt-5 flex justify-center">
            <img className='rounded-full w-40' src={logo} alt="" />
          </div>

          <form className='space-x-5 mt-10 flex justify-center'>
            <input className='outline-none pl-5 h-[50px] sm:w-[500px] border-2 border-black ' type="email" placeholder='enter email' required />
            <button type='submit' className='bg-[#7faa2c] px-3 py-2 hover:bg-black text-[20px] hover:text-white rounded-[7px] text-white font-semibold'>Sumbit</button>
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
            <NavLink to='/Apply'><button className="apply_btn flex  pl-3 py-2  text-white text-[20px] bg-[#7faa2c] space-x-3 pr-2 rounded-[7px]">
              <p className=' text-[20px]sm:mr-40 cursor-pointer text-center font-semibold'>Apply Now</p>
              <p><i class="fa-brands fa-telegram"></i></p>
            </button></NavLink>
          </div>

        </div>

        <video className='videoTag' autoPlay loop muted>
          <source src={bgvideo} type='video/mp4' />
        </video>
      </div >
    </>
  )
}
export default Home