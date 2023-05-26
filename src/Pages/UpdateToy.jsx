import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"
import PageTitle from "../Components/PageTitle"

function AddToyForm() {
  const data = useLoaderData()
  const {
    _id,
    available_quantity,
    category,
    description,
    image,
    name,
    price,
    rating,
    seller,
    sellerEmail,
  } = data
  console.log(data)

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const price = form.price.value
    const available_quantity = form.quantity.value
    const description = form.desc.value
    

    const updatedInfo = {
      price,
      available_quantity,
      description,
      rating,
      seller,
      sellerEmail,
      category,
      name,
      image
    }
    console.log(updatedInfo)
    //send updated data to the server
    fetch(`https://toy-shop-server-one.vercel.app/updateToy/${_id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedInfo)

    })
    .then(res=>res.json())
    .then(msg=>{
        console.log(msg)
        if(msg.modifiedCount>0){
            Swal.fire('Your toy information is Updated')
        }
    })


  }

  return (
    <div>
    <PageTitle title={'Update '}></PageTitle>
      <h1 className="text-2xl text-center font-semibold mb-4">
        Update {name}
      </h1>
      <form onSubmit={handleSubmit} className=" w-full  ">
        <div className="flex gap-8 w-full justify-between">
          <div className="w-1/2">
            <div className="mb-4">
              <label htmlFor="pictureUrl" className="block text-gray-700">
                Picture URL of the toy:
              </label>
              <input
                type="text"
                disabled
                id="pictureUrl"
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={image}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                disabled
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sellerName" className="block text-gray-700">
                Seller Name:
              </label>
              <input
                type="text"
                id="sellerName"
                disabled
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={seller}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sellerEmail" className="block text-gray-700">
                Seller Email:
              </label>
              <input
                type="email"
                disabled
                id="sellerEmail"
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={sellerEmail}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subCategory" className="block text-gray-700">
                Sub-category:
              </label>
              <input
                type="email"
                id="sellerEmail"
                disabled
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={category}
                readOnly
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={price}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                disabled
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={rating}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block text-gray-700">
                Available Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={available_quantity}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">
                Detail Description:
              </label>
              <textarea
                id="description"
                name="desc"
                className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={description}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
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
