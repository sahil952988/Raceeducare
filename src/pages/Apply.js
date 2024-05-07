import { useState } from "react"
import Independentcollege from "../components/courses/Independentcollege"
import CCTcollege from "../components/courses/CCTcollege"
import Mynooth from "../components/courses/Mynooth"

const Apply = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [year, setYear] = useState("")
  const [intake, setIntake] = useState("")

  const [level, setLevel] = useState("")
  const [photo, setPhoto] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ name, email, phone, year, intake, level })
  };


  const [selected, setSelected] = useState('independentCollege')


  const handleChange = (e) => {
    console.log(e.target.value)
    setSelected(e.target.value)
  }

  const [show, setShow] = useState(true)
  return (
    <>
      <div className="all_items ">
        <div className=".topic  ">
          <p className='topheading sm:text-[32px] text-center text-[20px] ml-5
       text-white  mt-10 font-bold '>Study In Ireland By Race Educare</p>
        </div>
      </div >

      <div className="all_items">
        <p className="text-center  text-white text-[40px] font-bold mt-10">Start Your Journey</p>

        <form onSubmit={handleSubmit} className=" mt-5 space-y-4 bg-white mr-auto ml-auto w-fit px-10 py-10 rounded-[8px]">

          <div className="name & email md:flex md:space-x-5 mr-5">
            <div className="name sm:pl-5">
              <p>Full Name:</p>
              <input req value={name} onChange={(e) => setName(e.target.value)} className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="enter name" />
            </div>

            <div className="email ">
              <p>Email Address:</p>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="email" placeholder="provide your email" />
            </div>
          </div>

          <div className="university & year md:flex md:mx-5 md:space-x-5">
            <div className="number">
              <p>Contact Number</p>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="enter a phone number" />
            </div>
            <div className="level">
              <p>Education Level</p>
              <select value={level} onChange={(e) => setLevel(e.target.value)} className=" border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                <option>level</option>
                <option>Bachelors</option>
                <option>Masters</option>
              </select>
            </div>
          </div>

          <div className="intake & course  md:flex md:mx-5 md:space-x-5">
            <div className="intake">
              <p>Preferred Intake:</p>
              <select value={intake} onChange={(e) => setIntake(e.target.value)} className=" border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                <option>Intake</option>
                <option>Feburary</option>
                <option>September</option>
              </select>
            </div>
            <div className="year">
              <p>Preferred Year:</p>
              <select value={year} onChange={(e) => setYear(e.target.value)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                <option>Year</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>

          <div className="course md:flex md:mx-5 md:space-x-5">

            <div className="university">
              <p>Preferred University:</p>
              <select value={selected} onChange={(e) => handleChange(e)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>

                <option onClick={() => setShow(true)} value="">University</option>
                <option onClick={() => setShow(false)}>Independent College</option>
                <option onClick={() => setShow(false)}>CCT college Dublin</option>
                <option onClick={() => setShow(false)}>Maynooth University</option>
              </select>
            </div>

            <div className="course">
              <p>Preferred Course:</p>

              {
                show ?
                  <select className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" name="" id="">
                    <option value="">
                      <h1>Course</h1>
                    </option>
                  </select>
                  : null
              }


              {selected == "Independent College" ? <Independentcollege /> : ""}
              {selected == "CCT college Dublin" ? <CCTcollege /> : ""}
              {selected == "Maynooth University" ? <Mynooth /> : ""}
            </div>
          </div>

          <div className="photo md:mx-5 mt-3 ">
            <p>Upload file</p>
            <input value={photo} onChange={(e) => setPhoto(e.target.value)} type="file" id="myFile" name="filename" />
          </div>

          <button className="ml-5 mt-3 bg-green-500 px-3 py-2 rounded-[8px]">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Apply