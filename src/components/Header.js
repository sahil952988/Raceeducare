import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.jpg"

const Header = () => {
  return (
    <>
      <div className="all_items">
        <div className=" sm:flex justify-between ">
          <img className='rounded-full lg:w-32 sm:w-20 w-36 h-36  lg:ml-28 sm:ml-16 ml-5 mt-5' src={logo} alt="" />
          <p className='sm:text-[32px] text-[20px] ml-5
       text-white  mt-10 font-semibold '>Study In Ireland By Race Educare</p>
          <p className='text-white text-[20px] sm:mr-40 mt-10 cursor-pointer text-center'><NavLink to='/Apply'>Apply</NavLink></p>
        </div>
      </div>
    </>
  )
}
export default Header