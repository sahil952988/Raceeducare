import { useState } from "react"

const Apply = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [university, setUniversity] = useState("")
  const [year, setYear] = useState("")
  const [intake, setIntake] = useState("")
  const [course, setCourse] = useState("")
  const [level, setLevel] = useState("")
  const [photo, setPhoto] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ name, email, phone, university, year, intake, course, level })
  };
  return (
    <>
      <div className="all_items ">
        <div className=".topic  ">
          <p className='sm:text-[32px] text-center text-[20px] ml-5
       text-white  mt-10 font-bold '>Study In Ireland By Race Educare</p>
        </div>
      </div >

      <div className="all_items">
        <p className="text-center  text-white text-[40px] font-bold">Start Your Journey</p>

        <form onSubmit={handleSubmit} className=" mt-20 space-y-4 bg-white mr-auto ml-auto w-fit px-10 py-10 rounded-[8px]">

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
              <select value={university} onChange={(e) => setUniversity(e.target.value)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                <option>University</option>
                <option>Independent College</option>
                <option>CCT college Dublin</option>
                <option>Maynooth University</option>
              </select>
            </div>

            <div className="course">
              <p>Preferred Course:</p>
              <select value={course} onChange={(e) => setCourse(e.target.value)} className="border-[1px] border-black rounded-[4px] md:w-[300px] w-full outline-none pl-5 py-3 text-black" required>
                <option>course</option>
                <option>Bachelor of Arts (Hons) in International Business</option>
                <option>Bachelor of Arts (Hons) in Accounting and Finance</option>
                <option>Bachelor of Arts (Hons) in Business Studies</option>
                <option>
                  Master of Arts in Dispute Resolution
                </option>
              </select>
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