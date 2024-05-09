import { useState } from "react"
import Independentcollege from "../components/courses/PGCourse/Independentcollege"
import CCTcollege from "../components/courses/PGCourse/CCtcollege"
import Mynooth from "../components/courses/PGCourse/Mynooth"
import Dundalk from "../components/courses/PGCourse/Dundalk"
import TuDulin from "../components/courses/PGCourse/TuDulin"
import { toast } from "react-toastify"
import axios from "axios"
import Tus from "../components/courses/PGCourse/Tus"
import bgvideo from "../Assets/Ireland  - The Making of  You.mp4"


const Apply = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [year, setYear] = useState("")
  const [intake, setIntake] = useState("")
  const [level, setLevel] = useState("")
  const [university, setUniversity] = useState("")
  const [course, setCourse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/auth/apply", {
        name,
        email,
        phone,
        level,
        intake,
        year,
        university,
        course
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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

        <div className="form ">
          <p className="text-center  text-white text-[40px] font-bold mt-10">Start Your Journey</p>

          <form onSubmit={handleSubmit} className=" mt-5 space-y-4 bg-white mr-auto ml-auto w-fit px-10 py-10 rounded-[8px]">

            <div className="name & email md:flex md:space-x-5 mr-5">
              <div className="name sm:pl-5">
                <p>Full Name:</p>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="sm:w-[300px] w-full border-[1px] border-black rounded-[4px] outline-none pl-5 py-3 text-black" type="text" placeholder="enter name" />
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
                <div value={level} onChange={(e) => setLevel(e.target.value)} >
                  <select value={selected} onChange={(e) => handleChange(e)}
                    className=" border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                    <option>level</option>
                    <option>Bachelors</option>
                    <option>Masters</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="intake & course  md:flex md:mx-5 md:space-x-5">
              <div className="year">
                <p>Preferred Year:</p>
                <select value={year} onChange={(e) => setYear(e.target.value)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                  <option>Year</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <div className="intake">
                <p>Preferred Intake:</p>
                <select value={intake} onChange={(e) => setIntake(e.target.value)} className=" border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                  <option>Intake</option>
                  <option>Feburary</option>
                  <option>September</option>
                </select>
              </div>
            </div>

            <div className="course md:flex md:mx-5 md:space-x-5">

              <div value={university} onChange={(e) => setUniversity(e.target.value)} className="university">
                <p>Preferred University:</p>
                <select value={selected} onChange={(e) => handleChange(e)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>

                  <option onClick={() => setShow(true)} value="">University</option>
                  <option onClick={() => setShow(false)}>Independent College</option>
                  <option onClick={() => setShow(false)}>CCT college Dublin</option>
                  <option onClick={() => setShow(false)}>Maynooth University</option>
                  <option onClick={() => setShow(false)}>Dundalk Institute of Technology</option>
                  <option onClick={() => setShow(false)}>Technological University of the Shannon (TUS)</option>
                  <option onClick={() => setShow(false)}>TU Dublin</option>
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


                <div value={course} onChange={(e) => setCourse(e.target.value)}>{selected === "Independent College" ? <Independentcollege /> : ""}</div>

                <div value={course} onChange={(e) => setCourse(e.target.value)}>{selected === "CCT college Dublin" ? <CCTcollege /> : ""}</div>

                <div value={course} onChange={(e) => setCourse(e.target.value)}> {selected === "Maynooth University" ? <Mynooth /> : ""}</div>

                <div value={course} onChange={(e) => setCourse(e.target.value)}> {selected === "Dundalk Institute of Technology" ? <Dundalk /> : ""}</div>

                <div value={course} onChange={(e) => setCourse(e.target.value)}> {selected === "Technological University of the Shannon (TUS)" ? <Tus /> : ""}</div>

                <div value={course} onChange={(e) => setCourse(e.target.value)}> {selected === "TU Dublin" ? <TuDulin /> : ""}</div>
              </div>
            </div>

            <div className="photo md:mx-5 mt-3 ">
              <p>Upload file</p>
              <input type="file" id="myFile" name="filename" />
            </div>

            <button className="ml-5 mt-3 bg-green-500 px-3 py-2 rounded-[8px]">Submit</button>
          </form>
        </div>
        <video className='videoTag' autoPlay loop muted>
          <source src={bgvideo} type='video/mp4' />
        </video>
      </div>
    </>
  )
}
export default Apply