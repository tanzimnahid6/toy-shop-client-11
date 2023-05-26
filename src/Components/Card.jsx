import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// eslint-disable-next-line react/prop-types
const Card = ({ toy }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleNotify = (id) => {
    if (!user) {
      return Swal.fire({
        title: "You Have to Login First",

        showCancelButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/toys/${id}`)
        }
      })
    }
    return navigate(`/toys/${id}`)
  }

  // eslint-disable-next-line react/prop-types
  const { image, name, price, rating, _id } = toy
  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img  src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between mt-4">
            <div >
              <p>Price:{price}</p>
              <>{<Rating readOnly value={rating} style={{ maxWidth: 100 }}  />

              }</>
            </div>
           
            <div onClick={() => handleNotify(_id)} className="btn btn-info">
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
