import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import Swal from "sweetalert2"
import { updateProfile } from "firebase/auth"
import PageTitle from "../Components/PageTitle"

const Register = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const navigate = useNavigate()
  
  const { createUser,logout } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const displayName = form.name.value
    const photoURL = form.photo.value
    if (password.length < 6) {
      setError("Pass word at least 6 character")
      setSuccess('')
      return
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setError("")
        setSuccess("User Registration successfully")
        updateUserData(user, displayName, photoURL)
        form.reset()
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Registration successfully done",
          showConfirmButton: false,
          timer: 1500,
        })
        logout()
        navigate('/')
      

      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
        if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
          setError("Email Already Exist")
          setSuccess('')
          return
        }
      })

    //update profile manually======*+*+*+*+*+*+*+*+*+*+**+*+*+
    const updateUserData = (user, displayName, photoURL) => {
      updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      })
        .then(() => {})
        .catch((error) => {
          // An error occurred
          // ...
          console.log(error)
        })
    }
  }
  return (
    <div>
      <PageTitle title={"Registration"}></PageTitle>
      <div className="  md:pt-1 md:h-[70vh]">
        <div className="block max-w-sm rounded-lg relative bg-lime-100 p-12  mx-auto ">
          <div className="text-center text-red-500">
            <h1>{error}</h1>
            <h1 className="text-green-600">{success}</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/*User name feild*/}
            <div className="relative mb-12" data-te-input-wrapper-init="">
              <input
                type="text"
                required
                placeholder="Enter your name"
                name="name"
                className="w-full p-2"
              />
            </div>
            {/*Photo url*/}
            <div className="relative mb-12" data-te-input-wrapper-init="">
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                required
                className="w-full p-2"
              />
            </div>
            {/*E-mail input*/}
            <div className="relative mb-12" data-te-input-wrapper-init="">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                required
                className="w-full p-2"
              />
            </div>
            {/*Password input*/}
            <div className="relative mb-6" data-te-input-wrapper-init="">
              <input
                type="password"
                name="password"
                required
                className="w-full p-2"
                placeholder="Password"
              />
            </div>
            {/*Submit button*/}
            <button type="submit" className="btn  btn-block btn-sm btn-info">
              Register
            </button>
            <p className="text-center m-2">
              Are you Login ? Please
              <Link className="text-blue-500 px-1" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
