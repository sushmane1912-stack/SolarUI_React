import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../services/apiService";
import "./Content.css";

const Content = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService
      .getSolarPlants()
      .then((response) => {
        setPlants(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching solar plants:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading solar plant types...</p>;

  return (
    <div className="content">
      <h2>Types of Solar Plantations</h2>
      <div className="plant-grid">
        {plants.map((plant, index) => (
          <div key={index} className="plant-card">
            <h3>{plant.type}</h3>
            <p>
              <strong>Capacity:</strong> {plant.capacity}
            </p>
            <p>
              <strong>Purpose:</strong> {plant.purpose}
            </p>
            <p>
              <strong>Land Requirement:</strong> {plant.landRequirement}
            </p>

            {/* Pass plant type via state */}
            <Link
              to="/enquiry"
              state={{ selectedType: plant.type }}
              className="enquiry-btn"
            >
              Request a Quote
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
