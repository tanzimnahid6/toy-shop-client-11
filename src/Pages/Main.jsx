import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gradient-to-t min-h-screen   from-indigo-100 from-10% via-sky-200 via-50% to-gray-400 to-90%">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
