import { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import Swal from "sweetalert2"
import PageTitle from "../Components/PageTitle"
import { FaGoogle } from "react-icons/fa"

const Login = () => {
  const [error,setError] = useState('')
  const { loginWithEmail, googlLogin } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const handleLogin = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value
    if(password.length<6){
      setError('Wrong Password')
    }
    loginWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setError('')
        console.log(user)
        form.reset()
        navigate(from, { replace: true })

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully done",
          showConfirmButton: false,
          timer: 1500,
        })
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message
      
        if(errorMessage=='Firebase: Error (auth/user-not-found).'){
          setError('Invalid user')
        }
      })
  }

  const handleWithGoogle = () => {
    googlLogin()
      .then((result) => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login successfully done",
          showConfirmButton: false,
          timer: 1500,
        })

        navigate(from, { replace: true })

        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)

        // ...
      })
  }
  return (
    <div>
      <PageTitle title={"Login"}></PageTitle>
      <div className=" relative pt-20 h-[80vh]">
        <div className="block max-w-sm rounded-lg bg-lime-100 relative  p-12   mx-auto ">
        <div className="text-center">
          <h1 className="text-red-500">{error}</h1>
        </div>
          <form onSubmit={handleLogin}>
            {/*E-mail input*/}
            <div className="relative mb-12" data-te-input-wrapper-init="">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                className="w-full p-2"
              />
            </div>
            {/*Password input*/}
            <div className="relative mb-6" data-te-input-wrapper-init="">
              <input
                type="password"
                name="password"
                className="w-full p-2"
                placeholder="Password"
              />
            </div>
            {/*Submit button*/}
            <button type="submit" className="btn  btn-block btn-sm btn-info">
              Login
            </button>
            <p className="text-center m-2">
              Are you Registered ? Please
              <Link className="text-blue-500 px-1" to="/register">
                Register
              </Link>
            </p>
          </form>
          <div className="text-center flex justify-center items-center">
            <button
              onClick={handleWithGoogle}
              className="btn btn-outline font-bold mt-2 "
            >
              Login With Google
              <span>
                <FaGoogle className="text-xl ml-2"></FaGoogle>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
