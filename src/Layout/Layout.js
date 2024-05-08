import { ToastContainer } from "react-toastify"
import Router from "../Routers/Router"
import Header from "../components/Header"



const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <ToastContainer />
    </>

  )
}
export default Layout