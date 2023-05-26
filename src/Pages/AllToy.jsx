import { useEffect, useState } from "react"
import TableRow from "../TableRow/TableRow"
import PageTitle from "../Components/PageTitle"

const AllToy = () => {
  const [toys, setToys] = useState([])
  const [searchText, setSearchText] = useState("")



  //show all functionality===============
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }
  useEffect(() => {
    fetch(`https://toy-shop-server-one.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data))
  }, [])

    
//search button implementation ============================
const handleSearch=(e)=>{
    e.preventDefault()
    fetch(`https://toy-shop-server-one.vercel.app/toySearch/${searchText}`)
    .then(res=>res.json())
    .then(data=>setToys(data))
}


  return (
    <div>
    <PageTitle title={'All Toy'}></PageTitle>
      <div className="flex justify-center">
        {/* Search area implementation */}
        <form className="form-control my-8 ">
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter Toy Name"
              className="input  input-bordered"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={handleSearch} className="btn">Search</button>
          </label>
        </form>
      </div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>SL</label>
              </th>
              <th>Name / Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys && showAll
              ? toys.map((toy, index) => (
                  <TableRow
                    index={index + 1}
                    toy={toy}
                    key={toy._id}
                  ></TableRow>
                ))
              : toys
                  .slice(0, 20)
                  .map((toy, index) => (
                    <TableRow
                      index={index + 1}
                      toy={toy}
                      key={toy._id}
                    ></TableRow>
                  ))}
          </tbody>
        </table>
      </div>
      <div className="text-center ">
        {!showAll && toys.length > 20 && (
          <button className="btn my-8 btn-primary" onClick={toggleShowAll}>
            Show All
          </button>
        )}
      </div>
    </div>
  )
}

export default AllToy
