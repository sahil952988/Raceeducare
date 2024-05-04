import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.jpg"
const Apply = () => {
  return (
    <>
      <div className=" sm:flex justify-between ">
        <img className='rounded-full lg:w-32 sm:w-20 w-36 h-36  lg:ml-28 sm:ml-16 ml-5 mt-5' src={logo} alt="" />
        <p className='sm:text-[32px] text-[20px] ml-5
       text-white  mt-10 font-semibold '>Study In Ireland By Race Educare</p>
        <p className='text-white text-[20px] sm:mr-40 mt-10 cursor-pointer text-center'><NavLink to='/Apply'>Apply</NavLink></p>
      </div>

      <div className="all_items">
        <p className="text-center  text-white text-[40px] font-bold">Start Your Journey</p>

        <form className=" mt-20 space-y-4 bg-white mr-auto ml-auto w-fit px-10 py-10 rounded-[8px]">

          <div className="name & email md:flex md:space-x-5 mr-5">
            <div className="name sm:pl-5">
              <p>Full Name:</p>
              <input className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="enter name" />
            </div>

            <div className="email ">
              <p>Email Address:</p>
              <input className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="email" placeholder="provide your email" />
            </div>
          </div>



          <div className="university & year md:flex md:mx-5 md:space-x-5">
            <div className="university">
              <p>Preferred University:</p>
              <input className="md:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="Enter Your University" />
            </div>

            <div className="year">
              <p>Preferred Year:</p>
              <select className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black">
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </select>
            </div>
          </div>

          <div className="intake & course  md:flex md:mx-5 md:space-x-5">
            <div className="intake">
              <p>Preferred Intake:</p>
              <select className=" border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black">
                <option>Jan-March</option>
                <option>April-May</option>
                <option>June-July</option>
                <option>Sept-Dec</option>
              </select>
            </div>

            <div className="course">
              <p>Preferred Course:</p>
              <select className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black">
                <option>Computer and Technology</option>
                <option>AI</option>
                <option>MBA</option>
                <option>Nursing</option>
              </select>
            </div>
          </div>


          <div className="photo md:mx-5">
            <p>Upload file</p>
            <input type="file" id="myFile" name="filename" />
          </div>

          <button className="ml-5 mt-3 bg-green-500 px-3 py-2 rounded-[8px]">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Apply