import { NavLink } from "react-router-dom"
import logo from "../Assets/logo.jpg"

const Header = () => {
  return (
    <>
      <div className="all_items">
        <div className=" flex justify-between ">
          <img className='rounded-full w-32 ml-28 mt-5' src={logo} alt="" />
          <p className='text-[32px] 
       text-white  mt-10 font-semibold'>Study In Ireland By Race Educare</p>
          <p className='text-white text-[20px] mr-40 mt-10 cursor-pointer'><NavLink to='/Apply'>Apply</NavLink></p>
        </div>
      </div>
    </>
  )
}
export default Header