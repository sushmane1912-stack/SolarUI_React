import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero-overlay">
        <h1>Solar Energy for a Brighter Future</h1>
        <p>Clean, renewable power for a sustainable world.</p>
      </div>
      <div className="cta-section">
        <Link to="/content" className="cta-btn">
          Explore Our Services
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
