import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function EditContact() {
  const abc = useSelector((state) => state);
  const { id } = useParams();

  const dispatch = useDispatch();

  const [name, setName] = useState(abc[id].name);
  const [mobile, setMobile] = useState(abc[id].mobile);
  const [address, setAddress] = useState(abc[id].address);

  abc[id] = { name: name, mobile: mobile, address: address };

  // console.log(xyz);

  function getName(event) {
    setName(event.target.value);
  }

  function getMobile(event) {
    setMobile(event.target.value);
  }

  function getAddress(event) {
    setAddress(event.target.value);
  }

  function submit() {
    dispatch({ type: "EDIT_CONTACT", payload: abc });
  }

  return (
    <div>
      <h1>EditContact Component</h1>
      Name:{" "}
      <input type="text" onChange={getName} defaultValue={abc[id].name}></input>
      <br></br>
      Mobile:{" "}
      <input
        type="number"
        onChange={getMobile}
        defaultValue={abc[id].mobile}
      ></input>
      <br></br>
      Address:{" "}
      <input
        type="textarea"
        onChange={getAddress}
        defaultValue={abc[id].address}
      ></input>
      <br></br>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>Reset</button>
      <button onClick={submit}>
        <Link to="/">Submit</Link>
      </button>
    </div>
  );
}

export default EditContact;
