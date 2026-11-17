import { useLocation } from "react-router-dom";
import { useState } from "react";
import apiService from "../../services/apiService";
import "./enquiry.css";

const Enquiry = () => {
  const location = useLocation();
  const selectedType = location.state?.selectedType || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    requirement: selectedType,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.submitEnquiry(formData);
      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <div className="enquiry">
      <h2>Enquiry Form</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="requirement">Requirement For</label>
          <select
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Utility-Scale Solar">Utility-Scale Solar</option>
            <option value="Commercial & Industrial (C&I) Solar">
              Commercial & Industrial (C&I) Solar
            </option>
            <option value="Residential / Distributed Solar">
              Residential / Distributed Solar
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your requirements or questions..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default Enquiry;
