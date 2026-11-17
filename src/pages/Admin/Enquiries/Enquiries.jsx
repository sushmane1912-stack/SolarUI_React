import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Enquiries.css";
import apiService from "../../../services/apiService";

const Enquiries = ({ onViewDetails }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [requirement, setRequirement] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiService.getEnquiries(requirement, status);
      setEnquiries(res.data);
    };
    fetchData();
  }, [requirement, status]);

  return (
    <div className="enquiries-container">
      <div className="enquiries-card">
        <h2>Enquiries</h2>

        <div className="filters">
          <select
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          >
            <option value="">All Requirements</option>
            <option value="Residential / Distributed Solar">
              Residential / Distributed Solar
            </option>
            <option value="Commercial & Industrial (C&I) Solar">
              Commercial & Industrial (C&I) Solar
            </option>
            <option value="Utility-Scale Solar">Utility-Scale Solar</option>
          </select>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="responded">Responded</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <table className="enquiries-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Requirement</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id}>
                <td>
                  {e.firstName} {e.lastName}
                </td>
                <td>{e.email}</td>
                <td>{e.requirement}</td>
                <td>
                  <span className={`status-badge status-${e.status}`}>
                    {e.status}
                  </span>
                </td>
                <td>{new Date(e.createdAt).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/enquiry_details/${e.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enquiries;
