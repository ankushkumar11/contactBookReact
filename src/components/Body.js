import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Body.css";

function Body() {
  const abc = useSelector((state) => state);
  const dispatch = useDispatch();

  function del(i) {
    abc.splice(i, 1);
    dispatch({ type: "DELETE_CONTACT", payload: abc });
  }

  const list = abc.map((pqr, i) => (
    <>
      <tr>
        <td className="oneBody">{pqr.name}</td>
        <td className="oneBody">{pqr.mobile}</td>
        <td className="oneBody">{pqr.address}</td>
        <td className="oneBody">
          <button>
            <Link to={"/editContact/" + i}>Edit</Link>
          </button>
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
