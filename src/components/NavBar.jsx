import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "../Icons/icons";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <div className="container-fluid h-10 nav-style">
      <h2>Construction Cost Calculator</h2>
      <nav className="flex just-end main-nav">
        <div>
          <AiOutlineHome />
          <NavLink>Home</NavLink>
        </div>
        <div>
          <NavLink to={"/quantity-estimator"}>Quantity-Estimator</NavLink>
          <br />
          <span>Construction Cost Estimator</span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
