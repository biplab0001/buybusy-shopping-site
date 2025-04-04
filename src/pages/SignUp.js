import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      alert("Email already exists. Please use a different email.");
      return;
    }

    // Create a new user object
    const newUser = {
      email: email,
      password: password,
    };

    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Store the updated users array back in localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful! You can now sign in.");
    navigate("/signin"); // Redirect to sign-in page after successful signup
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
