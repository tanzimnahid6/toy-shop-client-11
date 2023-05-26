import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const MyToyTableRow = ({toy,index,handleDelete}) => {
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
        description


      } = toy ||{}
    return (
        <>
             <tr>
              <th>
                <label>
                <h1>{index}</h1>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{category}</div>
                  </div>
                </div>
              </td>
              <td>{description}</td>
              <td>
                {seller}
                <br />
  
              </td>
              <td>{price}</td>
              <td>{available_quantity}</td>
              <th>
                <Link to={`/updateToy/${_id}`}><button   className="btn btn-primary m-1 btn-xs">Update</button> <br /></Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-warning m-1 btn-xs">Delete</button>

              </th>
            </tr>
        </>
    );
};

export default MyToyTableRow;