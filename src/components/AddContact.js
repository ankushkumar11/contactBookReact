import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function AddContact() {
  const dispatch=useDispatch()


  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [address, setAddress] = useState("");

  const xyz={name:name,mobile:mobile,address:address}

  console.log(xyz)


  function getName(event){
    setName(event.target.value)
  }

  function getMobile(event){
    setMobile(event.target.value)
  }

  function getAddress(event){
    setAddress(event.target.value)
  }

  function submit(){
    dispatch({type:"ADD_CONTACT",payload:xyz})
  }

  return (
    <div>
      <h1>AddContact Component</h1>
      Name: <input type="text" onChange={getName}></input>
      <br></br>
      Mobile: <input type="number" onChange={getMobile}></input>
      <br></br>
      Address: <input type="textarea" onChange={getAddress}></input>
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

export default AddContact;
