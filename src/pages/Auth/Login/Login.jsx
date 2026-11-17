import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../../services/apiService";
import "./Login.css";
import LoginError from "./LoginError";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.login(formData);
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/"); // redirect to home/dashboard
      } else {
        setError(true);
        alert("Login failed: token not found in response.");
      }
    } catch (error) {
      setError(true);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="auth-link">
          New user? <Link to="/register">Register here</Link>
        </p>

        {error && <LoginError />}
      </div>
    </div>
  );
};

export default Login;
