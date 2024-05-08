import { Navigate, Route, Routes } from "react-router-dom"
import Apply from "../pages/Apply"
import Home from "../pages/Home"


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Apply" element={<Apply />} />

      </Routes>
    </>
  )
}
export default Router