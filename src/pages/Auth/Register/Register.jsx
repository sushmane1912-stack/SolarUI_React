import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import apiService from "../../../services/apiService";
import "./Register.css";

// 1. Define the validation schema using Zod
const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit number"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register = () => {
  // 2. Initialize react-hook-form with the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur", // Validates when a user fields leaves focus
  });

  // 3. The data here is guaranteed to be valid according to the Zod schema
  const onSubmit = async (data) => {
    try {
      await apiService.register(data);
      alert("Registration successful! You can now login.");
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="register">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="error-text">{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="error-text">{errors.lastName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Contact Number"
              maxLength={10}
              {...register("contactNumber")}
            />
            {errors.contactNumber && (
              <p className="error-text">{errors.contactNumber.message}</p>
            )}
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

          {/* Disable button while submission is in-flight */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="auth-link">
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
