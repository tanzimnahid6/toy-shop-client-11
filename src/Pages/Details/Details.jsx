import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import PageTitle from "../../Components/PageTitle"

//picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
const Details = () => {
  const { user } = useContext(AuthContext)
  const userEmail = user.email
  const displayName = user.displayName

  const toy = useLoaderData()

  const {
    image,
    name,
    seller,
    price,
    rating,
    available_quantity,
    description,
    category,
  } = toy || {}
  return (
    <div>
    <PageTitle title={'Details'}></PageTitle>
      <div  className="card lg:card-side p-12 mt- shadow-2xl">
        <figure className="w-3/6  h-96 ">
          <img className="rounded-lg" src={image} alt="Album" />
        </figure>
        <div className="flex flex-col gap-12 p-8 text-xl ">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
          </div>
          <div className="flex  justify-between">
            <div>
              <p>Category:{category}</p>
              <p>Price{price}</p>
              <p>Rating : {rating}</p>
              <p>Available Quantity:{available_quantity}</p>
            </div>
            <div>
              <p>Seller Name :{seller}</p>
              <p>Email:{userEmail}</p>
              {displayName && <p>User Name:{displayName}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
