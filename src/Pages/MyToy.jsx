import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import MyToyTableRow from "../Components/MyToyTableRow"
import Swal from "sweetalert2"
import PageTitle from "../Components/PageTitle"

const MyToy = () => {
  const [order, setOrder] = useState("")
  const { user } = useContext(AuthContext)
  const email = user?.email
  const [toys, setToys] = useState([])
  //fetching data by user email wise==============
  useEffect(() => {
    fetch(`https://toy-shop-server-one.vercel.app/myToy/${email}?value=${order}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
      })
  }, [email, order])
  //delete data by id wise ==============================
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this toy ?",
      //   showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Ok",
      denyButtonText: `Don t save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://toy-shop-server-one.vercel.app/myToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const remaining = toys.filter((toy) => toy._id !== id)
              setToys(remaining)
            }
          })
        Swal.fire("Deleted!", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info")
      }
    })
  }

  return (
    <div>
    <PageTitle title={'My Toy'}></PageTitle>
      {toys.length>0 && (
        <div className=" flex gap-4 justify-center p-8">
          <button
            onClick={() => setOrder(1)}
            className="btn bg-gradient-to-r from-green-600 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Price (High to Low)
          </button>
          <button
            onClick={() => setOrder(-1)}
            className="btn bg-gradient-to-r  to-blue-600 from-green-400 hover:from-pink-500 hover:to-yellow-500 "
          >
            Price (Low to High)
          </button>
        </div>
      )}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>SL</label>
              </th>
              <th>Name / Category</th>
              <th>Description</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {toys.map((toy, index) => (
              <MyToyTableRow
                index={index + 1}
                handleDelete={handleDelete}
                toy={toy}
                key={toy._id}
              ></MyToyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToy
