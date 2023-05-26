import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import Swal from "sweetalert2"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  if (user) {
    console.log(user)
    const { displayName } = user
    console.log(displayName)
  }

  const handleSignOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log out successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }
  return (
    <div>
      <div className="navbar bg-cyan-100 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/alltoy">All Toy</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/addToy">Add Toy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mytoy">My Toy</NavLink>
                  </li>
                </>
              )}
              {user ? (
                <div className="flex gap-4">
                  <Link to="/login">
                    <div onClick={handleSignOut} className="btn">
                      Log Out
                    </div>
                  </Link>
                  <label
                    data-tip={user?.displayName}
                    className="avatar tooltip-bottom  tooltip"
                  >
                    <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user && user.photoURL} />
                    </div>
                  </label>
                </div>
              ) : (
                <div>
                  <Link to="/login">
                    <div className="btn">Log In</div>
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <div className="avatar flex gap-2 items-center">
            <div className="w-16 h-16 rounded-lg">
              <img src="https://i.ibb.co/4Vny0mF/pexels-ruvim-3767673.jpg" />
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">TurboCar</h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-700" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-700" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-700" : "")}
                to="/alltoy"
              >
                All Toy
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-700" : ""
                    }
                    to="/addtoy"
                  >
                    Add Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-700" : ""
                    }
                    to="/mytoy"
                  >
                    My Toy
                  </NavLink>
                </li>
              </>
            )}
            {user ? (
              <div className="flex gap-4">
                <NavLink to="/login">
                  <div onClick={handleSignOut} className="btn">
                    Log Out
                  </div>
                </NavLink>
                <label
                  data-tip={user?.displayName}
                  className="avatar tooltip-bottom  tooltip"
                >
                  <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user && user.photoURL} />
                  </div>
                </label>
              </div>
            ) : (
              <div>
                <NavLink to="/login">
                  <div className="btn">Log In</div>
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
