import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TableRow = ({ toy,index }) => {
 
  const {
    _id,
    name,
    category,
    // color,
    price,
    // rating,
    seller,
    image,
    available_quantity,
  } = toy ||{}



 
  return (
    <>
      <tr >
        <th>
          <label>
            <h1>{index}</h1>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3 ">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-75">{category}</div>
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{price}</td>
        <td>{available_quantity}</td>
        <th>
       <Link to={`/toys/${_id}`}>   <button  className="btn btn-info  btn-sm">details</button></Link>
        </th>
      </tr>
    </>
  )
}

export default TableRow
