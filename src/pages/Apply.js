import Header from "../components/Header"
import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.jpg"
const Apply = () => {
  return (
    <>
      <div className=" flex justify-between ">
        <img className='rounded-full w-32 ml-28 mt-5' src={logo} alt="" />
        <p className='text-[32px] 
       text-white  mt-10 font-semibold'>Race Educare Consultancy</p>
        <p className='text-white text-[20px] mr-40 mt-10 cursor-pointer'><NavLink to='/Home'>Home</NavLink></p>
      </div>

      <div className="all_items">
        <p className="text-center  text-white text-[40px] font-bold">Start Your Journey</p>

        <form className=" mt-20 space-y-4 bg-white mr-auto ml-auto w-fit px-10 py-10 rounded-[8px]">
          <div className="name & email flex space-x-5 mr-5">
            <div className="name pl-5">
              <p>Full Name:</p>
              <input className="w-[300px] border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="enter name" />
            </div>

            <div className="email ">
              <p>Email Address:</p>
              <input className="w-[300px] border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="email" placeholder="provide your email" />
            </div>
          </div>



          <div className="university & year flex mx-5 space-x-5">
            <div className="university">
              <p>Preferred University:</p>
              <input className="w-[300px] border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="Enter Your University" />
            </div>

            <div className="year">
              <p>Preferred Year:</p>
              <select className="border-[1px] border-black rounded-[4px] w-[300px] outline-none pl-5 py-3 text-black">
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

          <div className="intake & course  flex mx-5 space-x-5">
            <div className="intake">
              <p>Preferred Intake:</p>
              <select className=" border-[1px] border-black rounded-[4px] w-[300px] outline-none pl-5 py-3 text-black">
                <option>Jan-March</option>
                <option>April-May</option>
                <option>June-July</option>
                <option>Sept-Dec</option>
              </select>
            </div>
            <div className="course">
              <p>Preferred Course:</p>
              <select className="border-[1px] border-black rounded-[4px] w-[300px] outline-none pl-5 py-3 text-black">
                <option>Computer and Technology</option>
                <option>AI</option>
                <option>MBA</option>
                <option>Nursing</option>
              </select>
            </div>
          </div>


          <div className="photo mx-5">
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