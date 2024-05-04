import { Navigate, Route, Routes } from "react-router-dom"

import Apply from "./pages/Apply"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Header from "./components/Header"

const App = () => {
  return (
    <>


      <Routes>
        <Route path='/' element={<Navigate to='/Home' />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/apply" element={<Apply />} />

      </Routes>
    </>
  )
}
export default App