import "./About.css";
import founderImg from "../../assets/about.jpg";

const About = () => (
  <div className="about">
    <section className="about-hero">
      <h2>About Us</h2>
      <p>
        We are committed to building a sustainable future through solar energy
        solutions.
      </p>
    </section>

    <section className="about-mission">
      <h3>Our Mission</h3>
      <p>
        To empower communities and businesses with clean, renewable energy that
        reduces carbon footprint and drives innovation.
      </p>
    </section>

    <section className="about-values">
      <h3>Our Values</h3>
      <ul>
        <li>🌞 Sustainability</li>
        <li>⚡ Innovation</li>
        <li>🤝 Integrity</li>
        <li>🌍 Community Impact</li>
      </ul>
    </section>

    <section className="about-founder">
      <h3>Meet Our Founder</h3>
      <div className="founder-profile">
        <img src={founderImg} alt="Founder" className="founder-img" />
        <div className="founder-info">
          <h4>Mr. Sachin Mane</h4>
          <p>
            With over 16 years of experience in renewable energy, Mr. Sachin
            Mane founded Mahaurja Electrosystem with a vision to make clean
            power accessible to everyone. His leadership and dedication have
            driven the company to achieve milestones in sustainability and
            innovation.
          </p>
        </div>
      </div>
    </section>

    <section className="about-team">
      <h3>Meet the Team</h3>
      <p>
        Our diverse team of engineers, researchers, and visionaries is dedicated
        to making solar energy accessible to everyone.
      </p>
    </section>

    <section className="about-contact">
      <h3>Get in Touch</h3>
      <p>
        Have questions or want to collaborate? Reach out to us at{" "}
        <strong>contact@solarenergy.com</strong>.
      </p>
    </section>
  </div>
);

export default About;
