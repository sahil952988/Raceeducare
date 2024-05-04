import React from 'react'
import edu from "../Assets/logo2.jpg"


const Home = () => {
  return (
    <>

      <div className=" flex ">
        <div className="left_side w-[50%] xl:ml-28 ml-10">
          <p className='text-[40px] font-bold xl:mr-[600px] mb-10 mt-[150px] text-white'>We are coming Soon</p>

          <p className='text-[20px] font-semibold xl:mr-[200px] mr-[100px] font-sans text-white'>Welcome to Study in Ireland from Nepal
            We specialize in helping students from Nepal achieve their dream of studying in Ireland. With our expert guidance and support, you can make your journey smooth and successful.</p>

          <form className='space-x-5 mt-10'>
            <input className='outline-none pl-5 w-[400px] border-2 border-black h-10' type="email" placeholder='enter email' required />
            <button type='submit' className='bg-green-400 px-3 py-2 hover:bg-black hover:text-white'>Sumbit</button>
          </form>

          <div className="contact flex space-x-5 mt-5">
            <div className="watsap">
              <a href="#"><p className=' text-[30px] text-white'><i class="fa-brands fa-whatsapp"></i></p></a>
            </div>

            <div className="facebook">
              <a href="https://www.facebook.com/irelandfromnepal" target="_blank"><p className='text-[30px] text-white'><i class="fa-brands fa-facebook"></i></p></a>
            </div>

            <div className="email space-x-5 flex">
              <p className='text-[30px] text-white'><i class="fa-solid fa-envelope"></i> </p><p className='text-[16px] text-white mt-3'><i>admissions@studyinireland.info</i></p>
            </div>
          </div>

        </div>

        <div className="right mb-10">
          <img className='rounded-[8px] w-[550px] mt-[100px]' src={edu} alt="" />
        </div>
      </div>



    </>
  )
}
export default Home