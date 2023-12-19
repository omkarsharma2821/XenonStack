import React from "react";
import { NavLink } from "react-router-dom";
import useAppContext from "../AppContext";
import useCartContext from "../CartContext";

const Navbar = ({ mycart }) => {
  const { loggedIn, setLoggedIn, logout } = useAppContext();
  // const {cartitems} = useCartContext();

  const showLoginOptions = () => {
    if (loggedIn) {
      return (
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
      );
    }else{
      return <>
        <button className="d-flex px-4 btn btn-outline-primary me-2 active">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </button>
          <button className="d-flex px-4 btn btn-outline-primary active">
            <NavLink className="nav-link" to="/signup">
              Sign up
            </NavLink>
          </button>
      </>
    }
  };
  return (
    <nav className="sticky-top navbar navbar-expand-lg navFont shadow-lg">
      {/* <nav className="navbar navbar-expand-lg bg-success text-white"> */}
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
        <span className="px-3">XenonStack</span> 
          <span className="px-"><i class="fa-solid fa-bounce fa-chair  fa-xl"></i></span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addfurniture">
                Add Furniture
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/browsefurniture">
                Browse Furniture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/view">
                View Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cartpage">
                <span className="px-2"><i class="fa-solid fa-cart-shopping fa-xl style={color: #9d9dd8}"></i></span>
              </NavLink>
            </li>
            
          </ul>
            {showLoginOptions()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
