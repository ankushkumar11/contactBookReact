import { Link } from "react-router-dom";
import AddContact from "./AddContact";
import "./Header.css";

function Header() {
  return (
    <div className="oneHeader">
      <h1>Contact Book</h1>
      <button className="twoHeader">
        <Link to="/addContact">Add Contact</Link>
      </button>
    </div>
  );
}

export default Header;
