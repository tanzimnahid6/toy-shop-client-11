import { useContext, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import Swal from "sweetalert2"
import PageTitle from "../Components/PageTitle"

function AddToyForm() {
  const { user } = useContext(AuthContext)
  let email = user?.email
  let displayName = user?.displayName
  console.log(displayName)

  const [pictureUrl, setPictureUrl] = useState("")
  const [name, setName] = useState("")
  //   const [sellerName, setSellerName] = useState(null)
  //   const [sellerEmail, setSellerEmail] = useState(null)
  const [subCategory, setSubCategory] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const [quantity, setQuantity] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form submission or validation logic here
    // console.log("Form submitted!")
    // console.log("Toy details:", {
    //   image: pictureUrl,
    //   name,
    //   sellerName: displayName,
    //   sellerEmail: email,
    //   category: subCategory,
    //   price,
    //   rating,
    //   available_quantity: quantity,
    //   description,
    // })

    const toy = {
      image: pictureUrl,
      name,
      seller: displayName,
      sellerEmail: email,
      category: subCategory,
      price,
      rating,
      available_quantity: quantity,
      description,
    }
    fetch(`https://toy-shop-server-one.vercel.app/addToy`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(toy)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'A New Toy Added Successfully',
                showConfirmButton: false,
                timer: 1000
              })
        }
    })


    console.log(toy);
    // Reset form fields
    setPictureUrl("")
    setName("")
    // setSellerName("")
    // setSellerEmail("")
    setSubCategory("")
    setPrice("")
    setRating("")
    setQuantity("")
    setDescription("")
  }

  return (
    <div>
    <PageTitle title={'Add toy'}></PageTitle>
      <h1 className="text-2xl text-center font-semibold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit} className=" w-full md:flex gap-8 p-12">
        {/* Left side */}
        <div className="w-1/2">
          <div className="mb-4 ">
            <label htmlFor="pictureUrl" className="block text-gray-700">
              Picture URL of the toy:
            </label>
            <input
              type="text"
              id="pictureUrl"
              required
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={pictureUrl}
              onChange={(e) => setPictureUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Toy Name:
            </label>
            <input
              type="text"
              required
              id="name"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerName" className="block text-gray-700">
              Seller Name:
            </label>
            <input
              type="text"
              required
              id="sellerName"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              defaultValue={displayName}
              //   onChange={(e) => setSellerName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block text-gray-700">
              Seller Email:
            </label>
            <input
              type="email"
              id="sellerEmail"
              defaultValue={email}
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              //   value={sellerEmail}
              //   onChange={(e) => setSellerEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subCategory" className="block text-gray-700">
              Sub-category:
            </label>
            <select
              id="subCategory"
              required
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select a sub-category</option>
              <option value="sports_car">Sports Car</option>
              <option value="regular_car">Regular Car</option>
              <option value="mini_police_cars">Mini Police Cars</option>
            </select>
          </div>
        </div>

        {/* Right side  */}
        <div className="w-1/2">
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Price:
            </label>
            <input
              type="number"
              required
              id="price"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700">
              Available Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">
              Detail Description:
            </label>
            <textarea
              id="description"
              className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  )
}

export default function App() {
  return (
    <div className="container mx-auto p-4">
      <AddToyForm />
    </div>
  )
}
