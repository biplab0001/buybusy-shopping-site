import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/cart">Cart</Link>
          <Link to="/myorder">My Orders</Link>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
