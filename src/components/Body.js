import { useDispatch, useSelector } from "react-redux";
import "./Body.css";

function Body() {
  const abc = useSelector((state) => state);
  const dispatch=useDispatch()

  function del(i) {
    
  }

  const list = abc.map((pqr, i) => (
    <>
      <tr>
        <td className="oneBody">{pqr.name}</td>
        <td className="oneBody">{pqr.mobile}</td>
        <td className="oneBody">{pqr.address}</td>
        <td className="oneBody">
          <button>Edit</button>
        </td>
        <td className="oneBody">
          <button onClick={() => del(i)}>Delete</button>
        </td>
      </tr>
    </>
  ));

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {list}
      </table>
    </div>
  );
}

export default Body;
