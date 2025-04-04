import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default SignIn;
