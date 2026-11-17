import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService from "../../../services/apiService";
import "./EnquiryDetails.css";

const EnquiryDetails = () => {
  const { id } = useParams(); // 👈 gets the ":id" from your route
  const [enquiry, setEnquiry] = useState(null);

  useEffect(() => {
    // 👇 fetch the enquiry from backend when id changes
    apiService
      .getEnquiryById(id)
      .then((res) => setEnquiry(res.data)) // 👈 use res.data
      .catch((err) => console.error(err));
  }, [id]);

  if (!enquiry) return <p>Loading...</p>;

  return (
    <div className="enquiry-details-container">
      <div className="enquiry-details-card">
        <h2>Enquiry Details</h2>
        <div className="detail-row">
          <strong>Name:</strong> {enquiry.firstName} {enquiry.lastName}
        </div>
        <div className="detail-row">
          <strong>Email:</strong> {enquiry.email}
        </div>
        <div className="detail-row">
          <strong>Requirement:</strong> {enquiry.requirement}
        </div>
        <div className="detail-row">
          <strong>Status:</strong>
          <span className={`status-badge status-${enquiry.status}`}>
            {enquiry.status}
          </span>
        </div>
        <div className="detail-row">
          <strong>Message:</strong> {enquiry.message}
        </div>
        <div className="detail-row">
          <strong>Created At:</strong>{" "}
          {new Date(enquiry.createdAt).toLocaleString()}
        </div>
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Enquiries
        </button>
      </div>
    </div>
  );
};

export default EnquiryDetails;
